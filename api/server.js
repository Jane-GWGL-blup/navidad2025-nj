import express from "express";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const HASH = process.env.GIFT_PASSWORD_HASH;

app.post("/api/check", (req, res) => {
  const { password } = req.body;
  const hash = crypto.createHash("sha256").update(password).digest("hex");

  if (hash === HASH) {
    return res.status(200).json({ ok: true });
  }

  res.status(401).json({ ok: false });
});

// ❌ NO usar app.listen() en Vercel
// app.listen(3000)

export default app; // <-- Esto es lo correcto en Vercel
