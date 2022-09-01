const express = require("express");

const Song = require("../models/song.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const song = await Song.find()
      .populate({ path: "artist_id", select: "name" })
      .lean()
      .exec();

    return res.status(201).send(song);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const song = await Song.create(req.body);

    return res.status(201).send(song);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id).lean().exec();

    return res.status(201).send(song);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send(song);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);

    return res.status(201).send(song);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

module.exports = router;
