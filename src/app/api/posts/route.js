import Post from "@/models/Post";
import Connect from "@/utils/db";
import { NextResponse } from "next/server";
 

export const GET = async (requests) => {
  const url = new URL(requests.url);
  const username = url.searchParams.get("username");

  try {
    await Connect();
    const res = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};

export const POST = async (req) => {
  const body = await req.json();
  const newPost = await new Post(body);
  try {
    await Connect();
    await newPost.save();
    return new NextResponse("Post has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

