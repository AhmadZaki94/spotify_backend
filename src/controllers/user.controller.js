const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec();

    return res.status(201).send(user);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.status(201).send(user);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();

    return res.status(201).send(user);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send(user);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    return res.status(201).send(user);
  } catch (e) {
    return req.status(500).send(e.message);
  }
});

module.exports = router;
