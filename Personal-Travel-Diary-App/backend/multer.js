import multer from "multer"
import path from "path"
import dotenv from "dotenv"

dotenv.config()

// Determine storage type from environment variable
const storageType = process.env.STORAGE_TYPE || 'local'

// Configure storage based on environment setting
let storage

if (storageType === 'local') {
  // Local disk storage configuration
  storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/")
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) // unique file name
    },
  })
} else if (storageType === 'cloudinary') {
  // For Cloudinary, we'll use memory storage since we'll upload to cloud after multer processes the file
  storage = multer.memoryStorage()
}

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true)
  } else {
    cb(new Error("Only images are allowed"), false)
  }
}

// Initialize multer instance
const upload = multer({ storage, fileFilter })

export default upload
