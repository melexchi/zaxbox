import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import path from "path";
import fs from "fs";
import { promisify } from "util";

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = async (req: Request): Promise<any> => {
  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), "/public/uploads"),
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};

export async function POST(req: Request) {
  try {
    const { files } = await parseForm(req);

    const image = files.image?.[0];
    const filename = path.basename(image.filepath);
    const imageUrl = `/uploads/${filename}`;

    return NextResponse.json({ url: imageUrl });
  } catch (err: any) {
    console.error("Image Upload Error:", err);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}
