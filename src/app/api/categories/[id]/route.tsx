import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient



export async function GET(req:Request,{params}:{params:{id:string}}){

    try{
        const category = await prisma.category.findUnique({
            where:{id: Number(params.id)},
            include:{posts:true}
        })

        if(!category){
            return NextResponse.json(
                {error: "Category not found"},
                {status: 404}
            )
        }

        return NextResponse.json(category)

    }catch(err){
        return NextResponse.json(
            {err:"Category not found"},
            {status: 404}
        )
    }

}

export async function DELETE( req:Request,{params}:{params:{id:string}}){


    try{

        const postsWithCategory =await prisma.post.findMany({
            where:{
                categories:{
                    some:{id:Number(params.id)}
                }
            }
        })

        if(postsWithCategory.length > 0){
            return NextResponse.json(
                {error:"Cannot delet category that is assigned to posts"},
                {status:400}
            )
        }

        await prisma.category.delete({
            where:{id:Number(params.id)}
        })

        return NextResponse.json(
            {message:"Category deleted successfully"},
            {status:200}
        )

    }catch(err){
        return NextResponse.json(
            {err: "Failed to delet category"},
            {status: 500}
        )
    }



}