import { NextResponse } from "next/server";
import Contact from "../../../models/contact"; // Import Contact model
import connectDB from "../../../config/db"; // MongoDB connection logic

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();

    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Save contact form data to MongoDB
    const contact = new Contact({ name, email, message });
    await contact.save();

    return NextResponse.json(
      { message: "Message sent successfully", data: contact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact form data:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Internal Server Error", error: errorMessage },
      { status: 500 }
    );
  }
}
