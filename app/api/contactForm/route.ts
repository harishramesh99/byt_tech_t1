import { NextResponse } from "next/server";
import Contact from "../../../models/contact";
import connectDB from "../../../config/db";
import validator from "validator";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { name, email, message } = body;

    // Trim all input fields to prevent excessive spaces
    name = name.trim();
    email = email.trim();
    message = message.trim();

    // ✅ Input Validation & Sanitization
    if (!validator.isLength(name, { min: 2, max: 50 })) {
      return NextResponse.json({ message: "Name must be 2-50 characters" }, { status: 400 });
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }

    if (!validator.isLength(message, { min: 5, max: 500 })) {
      return NextResponse.json({ message: "Message must be 5-500 characters" }, { status: 400 });
    }

    // ✅ Sanitize inputs to prevent NoSQL Injection & XSS
    name = validator.escape(name);
    email = validator.escape(email);
    message = validator.escape(message);

    // ✅ Connect to MongoDB only when necessary
    await connectDB();

    // ✅ Store the sanitized contact form data
    const contact = new Contact({ name, email, message });
    await contact.save();

    return NextResponse.json({ message: "Message sent successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
