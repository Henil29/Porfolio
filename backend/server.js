import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendMail } from "./mail.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const app = express();
app.use(cors());
// Ensure preflight requests get proper CORS headers
// app.options('*', cors());
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


const clientDist = path.resolve(__dirname, "..", "dist");
app.use(express.static(clientDist));

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));
