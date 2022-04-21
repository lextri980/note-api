const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@note-api.j94hl.mongodb.net/note-api?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected!!!");
  } catch (error) {
    console.log("Fail to connect");
  }
}

module.exports = { connect };
