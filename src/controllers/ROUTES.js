const noteRouter = require("./note");

function route(app) {
  app.use("/note", noteRouter);
}

module.exports = route;
