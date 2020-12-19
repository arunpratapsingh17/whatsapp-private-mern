var mongoose = require("mongoose");
var groupSchema = new mongoose.Schema({
  name: String,

  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Messages",
    },
  ],
});

module.exports = mongoose.model("Groups", groupSchema);
