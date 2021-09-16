const mongoose = require("mongoose");
process.env.DB_HOST
mongoose
  .connect(process.env.DB_HOST, { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
