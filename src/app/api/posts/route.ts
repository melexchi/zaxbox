import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const cookieStore = cookies(); 
    const token = (await cookieStore).get("auth-token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized. No token provided." }, { status: 401 });
    }

    let decoded: any;
    try {
      decoded = jwt.verify(token, JWT_SECRET!);
    } catch (err) {
      return NextResponse.json({ error: "Invalid or expired token." }, { status: 401 });
    }

    const userId = decoded.userId;
    const { title, content, image, published } = body;

    const post = await prisma.post.create({
      data: {
        title,
        content,
        image,
        published: !!published,
        authorId: userId,
      },
    });

    return NextResponse.json(post);
  } catch (err) {
    console.error("POST /api/posts error:", err);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        published: true,
        createdAt: true,
      },
    });

    return NextResponse.json(posts);
  } catch (err) {
    console.error("GET /api/posts error:", err);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
