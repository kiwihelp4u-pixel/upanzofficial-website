import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("New Member:", body);

  // Temporary success (DB integration next step)
  return NextResponse.json({
    message: "Thank you! Your registration has been received."
  });
}