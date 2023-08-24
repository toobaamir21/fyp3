const mongoose = require('mongoose')
const {Schema} = mongoose
let QnASchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("qna", QnASchema);