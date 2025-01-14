import { QuestionSchema } from "@/lib/Validation";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/Prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = QuestionSchema.safeParse(body);

    // Check if validation is successful
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.format() },
        { status: 400 }
      );
    }

    const { email, message } = validation.data;
    // Create a new question entry in the database
    const question = await prisma.question.create({
      data: { email, message },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Question submitted successfully",
        data: question,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting question:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
