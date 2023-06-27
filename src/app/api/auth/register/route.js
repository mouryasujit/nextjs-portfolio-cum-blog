import Connect from "@/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
// import { streamToObject } from "stream-to-object";

export const POST = async (request) => {
  await Connect();
    const body = await request.text(); // Read the request body as a text string
    const data = JSON.parse(body);
  try {
    const hash = bcrypt.hashSync(data.password, 5);
    const newUser = new User({
      ...data,
      password: hash,
    });
    await newUser.save();
    return new NextResponse("user has been created", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
