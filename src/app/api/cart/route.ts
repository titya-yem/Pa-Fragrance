import { prisma } from "@/lib/Prisma";
import { ShippingAddressSchema } from "@/lib/Validation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = ShippingAddressSchema.safeParse(body);

  // Check if validation is successful
  if (!validation.success) {
    console.error("Validation errors:", validation.error.format());
    return NextResponse.json(
      {
        success: false,
        error: "Invalid input",
        details: validation.error.format(),
      },
      { status: 400 }
    );
  }

  // Destructure the validation data
  const {
    firstName,
    lastName,
    address1,
    address2,
    country,
    state,
    zipCode,
    phone,
    userId,
  } = validation.data;

  // Create shipping address
  const shippingAddress = await prisma.shippingAddress.create({
    data: {
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      address1: address1,
      address2: address2 || "",
      country: country,
      state: state,
      zipCode: zipCode,
      phone: phone,
    },
  });

  // Check if shipping address is created
  if (!shippingAddress) {
    return NextResponse.json(
      { success: false, error: "Failed to create shipping address" },
      { status: 500 }
    );
  }

  // Return success response
  return NextResponse.json({ success: true, data: shippingAddress });
}
