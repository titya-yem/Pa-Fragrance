import { NextRequest, NextResponse } from "next/server";
import { SignupSchema } from "@/lib/Validation";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/Client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = SignupSchema.safeParse(body);
    // check if validation is successful
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.format() },
        { status: 400 }
      );
    }

    const { name, email, password } = validation.data;
    // check if user already exists
    const findUser = await prisma.user.findUnique({
      where: { email },
    });
    // if user already exists, return error
    if (findUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create new user in database
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    // return new user
    return NextResponse.json({ success: true, user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
