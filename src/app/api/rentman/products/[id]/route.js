export async function GET(req, { params }) {
    const { id } = params;
  
    if (!id) {
      return new Response(
        JSON.stringify({ error: "Product ID is required" }),
        { status: 400 }
      );
    }
  
    try {
      const response = await fetch(`https://api.rentman.net/equipment/${id}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      });
  
      if (!response.ok) {
        console.error(`Failed to fetch product ${id}: ${response.statusText}`);
        return new Response(
          JSON.stringify({ error: "Failed to fetch product data" }),
          { status: response.status }
        );
      }
  
      const productData = await response.json();
  
      if (!productData?.data) {
        return new Response(
          JSON.stringify({ error: "Product not found" }),
          { status: 404 }
        );
      }
  
      // Fetch the image if available
      let imageUrl = null;
      if (productData.data.image) {
        const fileId = productData.data.image.split("/").pop();
        const imageResponse = await fetch(`https://api.rentman.net/files/${fileId}`, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        });
  
        if (imageResponse.ok) {
          const imageData = await imageResponse.json();
          imageUrl = imageData.data?.url || null;
        }
      }
  
      return new Response(
        JSON.stringify({ data: { ...productData.data, imageUrl } }),
        { status: 200 }
      );
  
    } catch (error) {
      console.error("Error fetching single product:", error);
      return new Response(
        JSON.stringify({ error: "Internal Server Error" }),
        { status: 500 }
      );
    }
  }