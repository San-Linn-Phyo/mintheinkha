import Question from "@/app/models/Question";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { qno } = params;
  const question = await Question.findOne({ questionNo: qno });
  return NextResponse.json(question);
}
