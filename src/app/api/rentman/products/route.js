let lastFetchTime = 0; // Track the timestamp of the last API request
const FETCH_DELAY = 1000; // Minimum delay (in ms) between consecutive API calls to prevent spam

export async function GET(req) {
  try {
    const now = Date.now();
    
    // Check if the request is happening too soon after the last one
    if (now - lastFetchTime < FETCH_DELAY) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please wait." }),
        { status: 429 } // Too Many Requests
      );
    }

    lastFetchTime = now; // Update the timestamp of the latest request

    // Extract query parameters from the request URL
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1; // Default to page 1
    const limit = parseInt(searchParams.get("limit")) || 10; // Default to 10 items per page
    const sortBy = searchParams.get("sort") || "name"; // Default sorting
    const offset = (page - 1) * limit; // Calculate offset for pagination

    // Build sorting parameter for API request
    let sortParam = "";
    if (sortBy === "price_asc") sortParam = "&sort=price:asc";
    if (sortBy === "price_desc") sortParam = "&sort=price:desc";

    // Optional short delay to smooth out bursts of requests
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Fetch paginated equipment data from Rentman API
    const response = await fetch(`https://api.rentman.net/equipment?limit=${limit}&offset=${offset}${sortParam}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`, // Use environment variable for auth
      },
    });

    // Handle failed request
    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch equipment data" }),
        { status: response.status }
      );
    }

    const equipmentData = await response.json();

    // Ensure data is always an array
    const products = Array.isArray(equipmentData.data) ? equipmentData.data : [equipmentData.data];

    // For each product, optionally fetch its image (staggered to avoid hitting rate limits)
    const productsWithImages = await Promise.all(
      products.map(async (product, index) => {
        // Skip image fetching if no image is available
        if (!product.image) return product;

        // Stagger image fetch calls by adding incremental delay
        await new Promise((resolve) => setTimeout(resolve, index * 200));

        const segments = product.image.split("/"); // Extract file ID from image URL
        const fileId = segments.pop();

        // Fetch actual image file data
        const imageResponse = await fetch(`https://api.rentman.net/files/${fileId}`, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        });

        // If image request fails, return product without imageUrl
        if (!imageResponse.ok) return product;

        const imageData = await imageResponse.json();

        // Return product with additional imageUrl field
        return {
          ...product,
          imageUrl: imageData.data.url || null,
        };
      })
    );

    // Return final response including paginated and image-enhanced product list
    return new Response(
      JSON.stringify({ data: productsWithImages, currentPage: page, limit }),
      { status: 200 }
    );
  } catch (error) {
    // Catch any unexpected errors and return a 500 response
    console.error("Error fetching products:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}