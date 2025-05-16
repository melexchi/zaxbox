import { NextRequest, NextResponse } from 'next/server';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import prisma from '@/lib/prisma';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (req: any): Promise<any> =>
  new Promise((resolve, reject) => {
    const form = new IncomingForm({
      uploadDir: path.join(process.cwd(), '/public/uploads'),
      keepExtensions: true,
      multiples: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const postId = Number(params.id);

  try {
    
    const { fields, files } = await parseForm(req);

    const title = fields.title?.[0] || '';
    const content = fields.content?.[0] || ''; 
    const published = fields.published?.[0] === 'true';
    const categoryIds = JSON.parse(fields.categoryIds?.[0] || '[]');
    const updatedAt = fields.updatedAt?.[0] || new Date().toISOString();

    let imageUrl: string | undefined;
    if (files.image && Array.isArray(files.image)) {
      const imageFile = files.image[0];
      const filename = path.basename(imageFile.filepath);
      imageUrl = `/uploads/${filename}`;
    }

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        title,
        content,
        published,
        updatedAt,
        ...(imageUrl && { image: imageUrl }),
        categories: {
          set: categoryIds.map((id: number) => ({ id })),
        },
      },
      include: {
        categories: true,
      },
    });

    return NextResponse.json(updatedPost);
  } catch (error: any) {
    console.error('PATCH error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}



export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const postId = Number(params.id);

  try {
    await prisma.post.delete({
      where: { id: postId },
    });

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error: any) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
