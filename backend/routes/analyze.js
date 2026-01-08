const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { execFile } = require("child_process");

/* ---------- Multer (Image Upload) ---------- */
const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "..", "uploads"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  }
});

const upload = multer({ storage });

/* ---------- AI ANALYZE ROUTE (NO DB) ---------- */
router.post("/", upload.single("image"), (req, res) => {
  console.log("📥 Analyze route hit");

  if (!req.file) {
    console.log("❌ No image received");
    return res.status(400).json({ error: "No image uploaded" });
  }

  const imagePath = path.resolve(req.file.path);
  console.log("📂 Image path:", imagePath);

  // ✅ USE SYSTEM PYTHON (MOST RELIABLE)
  const pythonPath = "python";

  const scriptPath = path.resolve(
    __dirname,
    "..",
    "..",
    "ai-model",
    "predict.py"
  );

  console.log("🐍 Python path:", pythonPath);
  console.log("📜 Script path:", scriptPath);

  execFile(pythonPath, [scriptPath, imagePath], (err, stdout, stderr) => {
    console.log("🐍 Python called");

    if (err) {
      console.error("❌ EXEC ERROR:", err);
      console.error("❌ STDERR:", stderr);
      return res.status(500).json({
        error: "AI analysis failed"
      });
    }

    console.log("✅ AI OUTPUT:", stdout);

    const [result, confidence] = stdout.trim().split(",");

    res.json({
      result,
      confidence: Number(confidence),
      imagePath: req.file.path
    });
  });
});

module.exports = router;
