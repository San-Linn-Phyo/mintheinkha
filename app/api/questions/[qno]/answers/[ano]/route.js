import { NextResponse } from "next/server";
import Answer from "@/app/models/Answer";
import connectDB from "@/app/lib/dbConnect";

export async function GET(request, { params }) {
  const { qno, ano } = params;
  await connectDB();
  const answer = await Answer.findOne({ questionNo: qno, answerNo: ano });
  return NextResponse.json(answer);
}
