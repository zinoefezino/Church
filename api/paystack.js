import Paystack from "paystack-api";

const paystack = Paystack(process.env.VITE_PAYSTACK_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount, email } = req.body;

    try {
      const transaction = await paystack.transaction.initialize({
        amount: parseFloat(amount) * 100, // Convert to kobo
        email,
        callback_url: `${process.env.VITE_VERCEL_URL}/success`,
      });

      res
        .status(200)
        .json({ authorization_url: transaction.data.authorization_url });
    } catch (error) {
      console.error("Paystack error:", error);
      res.status(500).json({ error: "Failed to initialize payment" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
