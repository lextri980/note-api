const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// @route GET /note ------------------------------
// @desc Read note
// @access Public
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find({});
    return res.status(200).json({
      success: true,
      notes,
    });
  } catch (err) {
    console.log(err);
  }
});

// @route POST /note ------------------------------
// @desc Create note
// @access Public
router.post("/", async (req, res) => {
  const { title, content, status } = req.body;

  if (!title || !content || !status) {
    return res.status(400).json({
      success: false,
      message: "Missing information",
    });
  }

  try {
    const newNote = new Note({
      title,
      content,
      status: status || "NORMAL",
    });

    await newNote.save();

    return res.status(200).json({
      success: true,
      message: "Create note successfully",
      note: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// @route PUT /note ------------------------------
// @desc Update note
// @access Public
router.put("/:id", async (req, res) => {
  const { title, content, status } = req.body;

  if (!title || !content || !status) {
    return res.status(400).json({
      success: false,
      message: "Missing information",
    });
  }
  try {
    let updateNote = {
      title,
      content,
      status: status || "NORMAL",
    };

    const updateConditions = { _id: req.params.id };

    updateNote = await Note.findOneAndUpdate(updateConditions, updateNote, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      message: "Update note successfully",
      note: updateNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// @route PUT /note ------------------------------
// @desc Update note
// @access Public
router.delete("/:id", async (req, res) => {
  try {
    let deleteCondition = { _id: req.params.id };

    const deleteNote = await Note.findOneAndDelete(deleteCondition);
    return res.status(200).json({
      success: true,
      message: "Delete note successfully",
      note: deleteNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = router;
