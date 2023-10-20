const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionNo: Number,
  questionName: String,
});

let Question = null;
if (mongoose.models.Question) Question = mongoose.model("Question");
else Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
