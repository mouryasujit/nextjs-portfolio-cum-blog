import { NextResponse } from "next/server";
import Post from "@/models/Post";
import Connect from "@/utils/db";

export const GET = async (requests, { params }) => {
  console.log(params);
  const { id } = params;

  try {
    const res = await Post.findById(id);
    return new NextResponse(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    await Connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("databse error", { status: 500 });
  }
};
