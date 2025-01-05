import { LoginSchema } from "@/lib/Validation";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "@/lib/Client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = LoginSchema.safeParse(body);

    // Check if validation is successful
    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input" },
        { status: 400 }
      );
    }

    const { email, password } = validation.data;

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // Check if password is correct
    const isPasswordCorrect = await compare(password, user.password!);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { success: false, error: "Incorrect password" },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "4h",
    });

    return NextResponse.json({ success: true, token }, { status: 200 });
  } catch (error) {
    console.error("Login error: ", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
