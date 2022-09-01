const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    release_date: { type: String, required: true },
    cover_image: { type: String, required: true },
    rating: { type: Number, required: true },
    artist_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "artist",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Song = mongoose.model("song", songSchema);

module.exports = Song;
