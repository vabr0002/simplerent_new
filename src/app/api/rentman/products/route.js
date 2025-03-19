export async function GET() {
  try {
    const response = await fetch("https://api.rentman.net/equipment", {
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

    // Ensure equipmentData.data is an array
    const products = Array.isArray(equipmentData.data)
      ? equipmentData.data
      : [equipmentData.data];

    // Fetch images for each product.
    const productsWithImages = await Promise.all(
      products.map(async (product) => {
        // Check if the product has an image flag set.
        if (!product.image) return product;

        // Use the product’s id as the file id.
        const fileId = product.id; // Adjust this if your API returns a separate file id

        const imageResponse = await fetch(`https://api.rentman.net/files/${fileId}`, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        });

        if (!imageResponse.ok) return product; // Skip if image fetch fails

        const imageData = await imageResponse.json();

        return {
          ...product,
          imageUrl: imageData.data.url || null, // Attach the image URL from the file details
        };
      })
    );

    return new Response(JSON.stringify({ data: productsWithImages }), { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}