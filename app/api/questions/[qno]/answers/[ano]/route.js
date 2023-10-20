import { NextResponse } from "next/server";
import Answer from "@/app/models/Answer";
import Question from "@/app/models/Question";
import connectDB from "@/app/lib/dbConnect";

export async function GET(request, { params }) {
  const { qno, ano } = params;
  await connectDB();
  const question = await Question.findOne({ questionNo: qno });
  const answer = await Answer.findOne({ questionNo: qno, answerNo: ano });
  console.log(question);
  console.log(answer);
  return NextResponse.json({
    question: question,
    answer: answer,
  });
}
