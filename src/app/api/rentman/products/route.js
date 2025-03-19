let lastFetchTime = 0; // Track the last request time
const FETCH_DELAY = 1000; // 1 second delay between API calls

export async function GET(req) {
  try {
    const now = Date.now();
    
    // Ensure a minimum delay between requests
    if (now - lastFetchTime < FETCH_DELAY) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please wait." }),
        { status: 429 }
      );
    }
    lastFetchTime = now; // Update last request time

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const sortBy = searchParams.get("sort") || "name";
    const offset = (page - 1) * limit;

    let sortParam = "";
    if (sortBy === "price_asc") sortParam = "&sort=price:asc";
    if (sortBy === "price_desc") sortParam = "&sort=price:desc";

    // Fetch equipment data with rate limiting
    await new Promise((resolve) => setTimeout(resolve, 500)); // Small buffer before fetching

    const response = await fetch(`https://api.rentman.net/equipment?limit=${limit}&offset=${offset}${sortParam}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch equipment data" }),
        { status: response.status }
      );
    }

    const equipmentData = await response.json();
    const products = Array.isArray(equipmentData.data) ? equipmentData.data : [equipmentData.data];

    // Fetch images with small delays between requests
    const productsWithImages = await Promise.all(
      products.map(async (product, index) => {
        if (!product.image) return product;

        // Introduce a delay between image fetches
        await new Promise((resolve) => setTimeout(resolve, index * 200)); // Staggered image fetching

        const segments = product.image.split("/");
        const fileId = segments.pop();

        const imageResponse = await fetch(`https://api.rentman.net/files/${fileId}`, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        });

        if (!imageResponse.ok) return product;

        const imageData = await imageResponse.json();
        return {
          ...product,
          imageUrl: imageData.data.url || null,
        };
      })
    );

    return new Response(
      JSON.stringify({ data: productsWithImages, currentPage: page, limit }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}