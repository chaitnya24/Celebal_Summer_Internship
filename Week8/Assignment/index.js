import express from "express";
import multer from "multer";
import axios from "axios";
import path from "path";
import fs from "fs";
import dotenv from 'dotenv';
dotenv.config();


const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const app = express();
const PORT = process.env.PORT || 3000;


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });


app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    const error = new Error("No file uploaded");
    error.statusCode = 400;
    throw error;
  }
  res.json({ success: true, filePath: req.file.path });
});

const WEATHER_API_KEY = process.env.openweathermap_api_key;

app.get("/api/weather/:city", async (req, res, next) => {
  try {
    const { city } = req.params;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
    const response = await axios.get(url);
    res.json({ success: true, data: response.data });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
