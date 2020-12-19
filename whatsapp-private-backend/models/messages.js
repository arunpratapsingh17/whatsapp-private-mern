var mongoose = require("mongoose");
var messageSchema = mongoose.Schema({
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: String,
  },
  text: String,
  timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Messages", messageSchema);
