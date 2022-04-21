const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    enum: ["IMPORTANT", "HIGHLIGHT", "NORMAL"],
  },
});

module.exports = mongoose.model("notes", NoteSchema);
