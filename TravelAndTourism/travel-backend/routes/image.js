const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const Image = require("../models/Image");
const { Readable } = require("stream");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("media"), async (req, res) => {
  try {
    const fileType = req.file.mimetype.startsWith("video") ? "video" : "image";
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: fileType, folder: "uploads" },
      async (error, result) => {
        if (error) return res.status(500).json({ error });

        const newImage = new Image({
          mediaUrl: result.secure_url,
          mediaType: fileType,
          description: req.body.description,
        });
        await newImage.save();
        res.status(201).json(newImage);
      }
    );

    const readable = new Readable();
    readable.push(req.file.buffer);
    readable.push(null);
    readable.pipe(stream);
  } catch (err) {
    res.status(500).json({ error: "Upload failed" });
  }
});

router.get("/", async (req, res) => {
  const media = await Image.find().sort({ _id: -1 });
  res.json(media);
});

router.post("/:id/comment", async (req, res) => {
  const { username, text } = req.body;
  const image = await Image.findById(req.params.id);
  if (!image) return res.status(404).send("Media not found");

  image.comments.push({ username, text });
  await image.save();
  res.status(201).json(image.comments);
});

module.exports = router;
