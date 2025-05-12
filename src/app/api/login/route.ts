import { NextResponse } from "next/server";
import { LoginSchema } from "@/lib/validations";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import {cookies} from "next/headers"
import { error } from "console";
import path from "path";


const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(request: Request) {

    try{

        const body = await request.json();
        const validated =LoginSchema.safeParse(body);

        if(!validated.success){
            return NextResponse.json({
                error:"Invalid input"},
                {status:400});
        }

        const {email,password} = validated.data;

        const user = await prisma.user.findUnique({where:{email}});

        if(!user){
            return NextResponse.json({error:"Invalid credentials"},{status:401});
        }

        const token = jwt.sign({ userId: user.id}, JWT_SECRET,{expiresIn:"7d"});


        (await cookies()).set("auth-token",token,{
            httpOnly:true,
            path:"/",
            secure:process.env.NODE_ENV === "production",
            maxAge: 7*24*60*60,
            sameSite:"strict",
        })
        return NextResponse.json({message:"Login successful"},{status:200});

    }catch(err){
        console.error("Login Error",err);
        return NextResponse.json({error:"Server Error"}, {status:500});
    }

}