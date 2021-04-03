const mongoose = require("mongoose");
require("dotenv").config();

const ticketSchema = new mongoose.Schema({
  title: String,
  data: String,
  writer: String,
  creationDate: String,
  labels: [String],
  done: Boolean,
});

module.exports = mongoose.model("Ticket", ticketSchema);
