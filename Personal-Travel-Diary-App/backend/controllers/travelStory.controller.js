import { fileURLToPath } from "url"
import TravelStory from "../models/travelStory.model.js"
import { errorHandler } from "../utils/error.js"
import path from "path"
import fs from "fs"

export const addTravelStory = async (req, res, next) => {
  const { title, story, visitedLocation, imageUrl, visitedDate } = req.body

  const userId = req.user.id

  //   validate required field
  if (!title || !story || !visitedLocation || !imageUrl || !visitedDate) {
    return next(errorHandler(400, "All fields are required"))
  }

  //   convert visited date from milliseconds to Date Object
  const parsedVisitedDate = new Date(parseInt(visitedDate))

  try {
    const travelStory = new TravelStory({
      title,
      story,
      visitedLocation,
      userId,
      imageUrl,
      visitedDate: parsedVisitedDate,
    })

    await travelStory.save()

    res.status(201).json({
      story: travelStory,
      message: "You story is added successfully!",
    })
  } catch (error) {
    next(error)
  }
}

export const getAllTravelStory = async (req, res, next) => {
  const userId = req.user.id

  try {
    const travelStories = await TravelStory.find({ userId: userId }).sort({
      isFavorite: -1,
    })

    res.status(200).json({ stories: travelStories })
  } catch (error) {
    next(error)
  }
}

export const imageUpload = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(errorHandler(400, "No image uploaded"))
    }

    const storageType = process.env.STORAGE_TYPE || 'local'
    let imageUrl = ''

    if (storageType === 'local') {
      // Local storage path
      const PORT = process.env.PORT || 5000
      imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`
    } else if (storageType === 'cloudinary') {
      // Upload to Cloudinary
      try {
        // Import cloudinary dynamically to avoid issues if not configured
        const cloudinary = (await import('../config/cloudinary.js')).default
        
        // Convert buffer to base64 string for Cloudinary upload
        const b64 = Buffer.from(req.file.buffer).toString('base64')
        const dataURI = `data:${req.file.mimetype};base64,${b64}`
        
        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(dataURI, {
          folder: 'travel-diary',
          resource_type: 'image'
        })
        
        // Get secure URL from Cloudinary
        imageUrl = result.secure_url
      } catch (cloudinaryError) {
        console.error('Cloudinary upload error:', cloudinaryError)
        return next(errorHandler(500, "Failed to upload image to cloud storage"))
      }
    }

    res.status(201).json({ imageUrl })
  } catch (error) {
    next(error)
  }
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootDir = path.join(__dirname, "..")

export const getPublicTravelStories = async (req, res, next) => {
  try {
    // Find all travel stories and populate the userId field to get admin information
    const travelStories = await TravelStory.find().populate('userId', 'username')
    
    res.status(200).json({ stories: travelStories })
  } catch (error) {
    next(error)
  }
}

export const deleteImage = async (req, res, next) => {
  const { imageUrl } = req.query

  if (!imageUrl) {
    return next(errorHandler(400, "imageUrl parameter is required!"))
  }

  try {
    const storageType = process.env.STORAGE_TYPE || 'local'

    if (storageType === 'local') {
      // Local file deletion
      // Extract the file name from the imageUrl
      const filename = path.basename(imageUrl)

      // Delete the file path
      const filePath = path.join(rootDir, "uploads", filename)

      console.log(filePath)

      // Check if the file exists
      if (!fs.existsSync(filePath)) {
        return next(errorHandler(404, "Image not found!"))
      }

      // Delete the file
      await fs.promises.unlink(filePath)
    } else if (storageType === 'cloudinary') {
      // Cloudinary file deletion
      try {
        // Import cloudinary dynamically
        const cloudinary = (await import('../config/cloudinary.js')).default
        
        // Extract public_id from the URL
        // Cloudinary URLs typically look like: https://res.cloudinary.com/cloud_name/image/upload/v1234567890/travel-diary/abcdef123456.jpg
        // We need to extract the 'travel-diary/abcdef123456' part
        const urlParts = imageUrl.split('/')
        const filenameWithExtension = urlParts[urlParts.length - 1]
        const filename = filenameWithExtension.split('.')[0]
        const folderName = urlParts[urlParts.length - 2]
        const public_id = `${folderName}/${filename}`
        
        // Delete from Cloudinary
        await cloudinary.uploader.destroy(public_id)
      } catch (cloudinaryError) {
        console.error('Cloudinary deletion error:', cloudinaryError)
        return next(errorHandler(500, "Failed to delete image from cloud storage"))
      }
    }

    res.status(200).json({ message: "Image deleted successfully!" })
  } catch (error) {
    next(error)
  }
}

export const editTravelStory = async (req, res, next) => {
  const { id } = req.params
  const { title, story, visitedLocation, imageUrl, visitedDate } = req.body
  const userId = req.user.id

  // validate required field
  if (!title || !story || !visitedLocation || !visitedDate) {
    return next(errorHandler(400, "All fields are required"))
  }

  //   convert visited date from milliseconds to Date Object
  const parsedVisitedDate = new Date(parseInt(visitedDate))

  try {
    const travelStory = await TravelStory.findOne({ _id: id, userId: userId })

    if (!travelStory) {
      next(errorHandler(404, "Travel Story not found!"))
    }

    const PORT = process.env.PORT || 5000
    const placeholderImageUrl = `http://localhost:${PORT}/assets/placeholderImage.png`

    travelStory.title = title
    travelStory.story = story
    travelStory.visitedLocation = visitedLocation
    travelStory.imageUrl = imageUrl || placeholderImageUrl
    travelStory.visitedDate = parsedVisitedDate

    await travelStory.save()

    res.status(200).json({
      story: travelStory,
      message: "Travel story updated successfully!",
    })
  } catch (error) {
    next(error)
  }
}

export const deleteTravelStory = async (req, res, next) => {
  const { id } = req.params
  const userId = req.user.id

  try {
    const travelStory = await TravelStory.findOne({ _id: id, userId: userId })

    if (!travelStory) {
      next(errorHandler(404, "Travel Story not found!"))
    }

    // delete travel story from the database
    await travelStory.deleteOne({ _id: id, userId: userId })

    // Check if the image is not a placeholder before deleting
    const PORT = process.env.PORT || 5000
    const placeholderImageUrl = `http://localhost:${PORT}/assets/placeholderImage.png`
    const storageType = process.env.STORAGE_TYPE || 'local'

    // Extract the imageUrl from the travel story
    const imageUrl = travelStory.imageUrl

    if (imageUrl && imageUrl !== placeholderImageUrl) {
      if (storageType === 'local') {
        // Local file deletion
        // Extract the filename from the image url
        const filename = path.basename(imageUrl)
        const filePath = path.join(rootDir, "uploads", filename)

        // Check if the file exists before deleting
        if (fs.existsSync(filePath)) {
          // delete the file
          await fs.promises.unlink(filePath) // delete the file asynchronously
        }
      } else if (storageType === 'cloudinary' && imageUrl.includes('cloudinary.com')) {
        try {
          // Import cloudinary dynamically
          const cloudinary = (await import('../config/cloudinary.js')).default
          
          // Extract public_id from the URL
          const urlParts = imageUrl.split('/')
          const filenameWithExtension = urlParts[urlParts.length - 1]
          const filename = filenameWithExtension.split('.')[0]
          const folderName = urlParts[urlParts.length - 2]
          const public_id = `${folderName}/${filename}`
          
          // Delete from Cloudinary
          await cloudinary.uploader.destroy(public_id)
        } catch (cloudinaryError) {
          console.error('Cloudinary deletion error during story deletion:', cloudinaryError)
          // Continue with story deletion even if image deletion fails
        }
      }
    }

    res.status(200).json({ message: "Travel story deleted successfully!" })
  } catch (error) {
    next(error)
  }
}

export const updateIsFavourite = async (req, res, next) => {
  const { id } = req.params
  const { isFavorite } = req.body
  const userId = req.user.id

  try {
    const travelStory = await TravelStory.findOne({ _id: id, userId: userId })

    if (!travelStory) {
      return next(errorHandler(404, "Travel story not found!"))
    }

    travelStory.isFavorite = isFavorite

    await travelStory.save()

    res
      .status(200)
      .json({ story: travelStory, message: "Updated successfully!" })
  } catch (error) {
    next(error)
  }
}

export const searchTravelStory = async (req, res, next) => {
  const { query } = req.query
  const userId = req.user.id

  if (!query) {
    return next(errorHandler(404, "Query is required!"))
  }

  try {
    const searchResults = await TravelStory.find({
      userId: userId,
      $or: [
        { title: { $regex: query, $options: "i" } },
        { story: { $regex: query, $options: "i" } },
        { visitedLocation: { $regex: query, $options: "i" } },
      ],
    }).sort({ isFavorite: -1 })

    res.status(200).json({
      stories: searchResults,
    })
  } catch (error) {
    next(error)
  }
}

export const filterTravelStories = async (req, res, next) => {
  const { startDate, endDate } = req.query
  const userId = req.user.id

  try {
    const start = new Date(parseInt(startDate))
    const end = new Date(parseInt(endDate))

    const filteredStories = await TravelStory.find({
      userId: userId,
      visitedDate: { $gte: start, $lte: end },
    }).sort({ isFavorite: -1 })

    res.status(200).json({ stories: filteredStories })
  } catch (error) {
    next(error)
  }
}
