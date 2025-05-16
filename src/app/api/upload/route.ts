import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";
import { randomUUID } from "crypto";

export async function POST(req: { formData: () => any; }) {
  try {
  
    const uploadDir = join(process.cwd(), "public/uploads");
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    
    const formData = await req.formData();
    const file = formData.get("image");
    
    if (!file) {
      return NextResponse.json({ error: "No image file uploaded" }, { status: 400 });
    }

   
    const buffer = Buffer.from(await file.arrayBuffer());
    const originalFilename = file.name || "upload.jpg";
    const fileExt = originalFilename.split('.').pop().toLowerCase();
    const filename = `${randomUUID()}.${fileExt}`;
    const filePath = join(uploadDir, filename);

    
    await writeFile(filePath, buffer);

   
    const imageUrl = `/uploads/${filename}`;
    return NextResponse.json({ url: imageUrl });
    
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}