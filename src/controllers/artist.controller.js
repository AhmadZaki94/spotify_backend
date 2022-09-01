const express = require("express");

const Artist = require("../models/artist.model");
const Songs = require("../models/song.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const artist = await Artist.find().lean().exec();
    console.log(artist.length);

    for (let i = 0, len = artist.length; i < len; i++) {
      let artistId = artist[i]._id;
      let songs = await Songs.aggregate([
        { $unwind: "$artist_id" },
        { $match: { artist_id: artistId } },
        { $project: { _id: 0, name: 1 } },
      ]);
      artist[i].song_name = [...songs];
      console.log(songs);
    }

    return res.status(201).send(artist);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const artist = await Artist.create(req.body);

    return res.status(201).send(artist);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id).lean().exec();

    return res.status(201).send(artist);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send(artist);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const artist = await Artist.findByIdAndDelete(req.params.id);

    return res.status(201).send(artist);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

module.exports = router;
