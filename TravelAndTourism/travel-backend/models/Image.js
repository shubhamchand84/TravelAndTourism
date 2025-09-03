
// const mongoose = require("mongoose");

// const CommentSchema = new mongoose.Schema({
//   username: String,
//   text: String,
//   timestamp: { type: Date, default: Date.now },
// });

// const ImageSchema = new mongoose.Schema({
//   mediaUrl: String,
//   mediaType: { type: String, enum: ["image", "video"] },
//   description: String,
//   comments: [CommentSchema],
// });

// module.exports = mongoose.model("Image", ImageSchema);

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  username: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
});

const ImageSchema = new mongoose.Schema({
  mediaUrl: String,
  mediaType: { type: String, enum: ["image", "video"] },
  description: String,
  comments: [CommentSchema],
});

module.exports = mongoose.model("Image", ImageSchema);