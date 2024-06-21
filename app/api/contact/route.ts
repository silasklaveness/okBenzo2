import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { fullname, email, message } = await req.json();
  try {
    await connectDB();
    await Contact.create({ fullname, email, message });
    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList: string[] = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      return NextResponse.json(
        {
          msg: errorList,
          success: false,
        },
        { status: 400 }
      );
    } else {
      console.error("Internal server error:", error);
      return NextResponse.json(
        {
          msg: ["An internal server error occurred"],
          success: false,
        },
        { status: 500 }
      );
    }
  }
}
