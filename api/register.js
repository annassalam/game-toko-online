export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(450).json({ error: "Method Not Allowed"});
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbya4lK9TqpmV-lhKEDiG03eJIi5Ce5dSh5blR08NCeB9jAjZTk_t0JyX1Qew-CVLWkgjA/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(req.body)
    });

    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    res.status.(500).json({
      status: "error",
      message: "Gagal menghubungi server registrasi",
      detail: error.message
    });
  }
}
