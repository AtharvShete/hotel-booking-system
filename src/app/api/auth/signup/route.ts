import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/server/db";
import { hash } from "bcryptjs";
import * as z from "zod";


export const signUpSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export async function POST(request: NextRequest) {
  try {
    const body = signUpSchema.parse(await request.json());
    const validatedData = signUpSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          message: validatedData.error.errors
            .map((err) => `${err.path.join(".")}: ${err.message}`)
            .join(", "),
          data: body,
        },
        { status: 400 },
      );
    }

    const { firstName, lastName, email, password } = validatedData.data;
    const existingUser = await db.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User with this email already exists",
          data: { ...body, password: "", confirmPassword: "" },
        },
        { status: 400 },
      );
    }

    const hashedPassword = await hash(password, 10);

    await db.user.create({
      data: {
        email: email.toLowerCase(),
        password: hashedPassword,
        firstName,
        lastName,
        role: "USER", 
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully",
        data: { ...body, password: "", confirmPassword: "" },
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Signup error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An error occurred during signup",
        data: {},
      },
      { status: 500 },
    );
  }
}
