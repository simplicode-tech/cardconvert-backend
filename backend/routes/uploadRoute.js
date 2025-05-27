import express from 'express';
import cloudinary from '../cloudinaryConfig.js';
import upload from '../multerConfig.js'
import {Image} from '../models/imageModels.js'
const router = express.Router();

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded." });

    cloudinary.uploader.upload_stream(
      { folder: "user_uploads" },
      async (error, response) => {
        if (error) return res.status(500).json({ message: "Upload failed.", error });

        // Save the uploaded image URL to MongoDB
        const newImage = new Image({ url: response.secure_url });
        await newImage.save();

        res.status(200).json({ message: "Image uploaded successfully!", imageUrl: response.secure_url });
      }
    ).end(req.file.buffer);
    
  } catch (error) {
    res.status(500).json({ message: "Server error.", error });
  }
});

export default router;