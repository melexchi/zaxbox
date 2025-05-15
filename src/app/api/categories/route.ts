import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";
import { request } from "http";


const prisma =new PrismaClient()



export async function GET(){

    try{

        const categories =await prisma.category.findMany({
            orderBy:{
                name:'desc'
            }
        })
        return NextResponse.json(categories)

    }catch(err){
        return NextResponse.json(
            {error: "Failed to fetch categories"},
            {status: 500},
        )
    }
}


    export async function POST(req:Request){

        try{

            const {name} = await req.json()


            if(!name){
                return NextResponse.json(
                    {error:"Category name is required"},
                    {status:400}
                )
            }

            const newCategory = await prisma.category.create({
                data:{name}
            })

        }catch(err){
            return NextResponse.json(
                {error:"failed to create category"},
                {status:500}
            )
        }

    }


