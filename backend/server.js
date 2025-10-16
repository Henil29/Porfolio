import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendMail } from "./mail.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: ["https://henilp.dev", "http://localhost:5173"], // add local dev domain too
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

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



app.listen(5000, () => console.log("🚀 Backend running at http://localhost:5000"));
