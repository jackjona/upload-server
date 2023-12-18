const express = require("express");
const multer = require("multer");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Use multer for storing uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// File upload route
app.post("/upload", upload.single("file"), (req, res, next) => {
  // Check if a file is uploaded
  if (!req.file) {
    return res.status(400).send({ error: "No file uploaded" });
  }

  try {
    res.send("File uploaded successfully");
    console.log("[status] A file was successfully uploaded to the server");
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
