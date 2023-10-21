import { NextResponse } from "next/server";
import connectDB from "@/app/lib/dbConnect";
import Question from "@/app/models/Question";

export async function GET(request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const keyword = searchParams.get("keyword");
  let questions = null;

  if (keyword) {
    questions = await Question.find({ questionName: { $regex: keyword } });
  } else if (page) {
    console.log(page);
    const limit = 9;
    questions = await Question.find({})
      .sort({ questionNo: 1 })
      .limit(limit)
      .skip((page - 1) * limit);
  } else questions = await Question.find({});
  return NextResponse.json(questions);
}
