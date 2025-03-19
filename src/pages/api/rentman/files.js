export default async function handler(req, res) {
    const response = await fetch("https://api.rentman.net/files/99", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
  
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch data" });
    }
  
    const data = await response.json();
    res.status(200).json(data);
  }