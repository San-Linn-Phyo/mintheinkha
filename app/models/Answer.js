const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  questionNo: Number,
  answerNo: Number,
  answerResult: String,
});

let Answer = null;
if (mongoose.models.Answer) Answer = mongoose.model("Answer");
else Answer = mongoose.model("Answer", AnswerSchema);
module.exports = Answer;
