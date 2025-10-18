import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendMail, verifyEmailTransport } from "./mail.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", time: new Date().toISOString() });
});

app.get("/", (req, res) => {
  res.send("Email Service is running");
});

app.post("/api/send", async (req, res) => {
  try {
    const result = await sendMail(req.body);
    if (result.success) {
      res.status(200).json({ message: "Email sent successfully!" });
    } else {
      res.status(500).json({ message: "Failed to send email", error: result.error });
    }
  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
});

// SMTP connectivity probe for debugging on Render
app.get("/api/verify-smtp", async (_req, res) => {
  const result = await verifyEmailTransport();
  if (result.success) return res.status(200).json({ ok: true, used: result.used });
  return res.status(500).json({ ok: false, error: result.error });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));
