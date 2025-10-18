import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendMail } from "./mail.js";

import path from "path";
import { fileURLToPath } from "url";
// Resolve project root and load the root .env explicitly so it works even if the
// process is started from a different working directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const app = express();
app.use(cors());
app.use(express.json());


// Health endpoint for uptime/health checks
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', time: new Date().toISOString() });
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


// In production, serve the frontend build from /dist
const clientDist = path.resolve(__dirname, "..", "dist");
app.use(express.static(clientDist));

// SPA fallback to index.html (after API routes)
// Express 5 uses path-to-regexp v6; use a regex or (.*) pattern, not "*"
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));
