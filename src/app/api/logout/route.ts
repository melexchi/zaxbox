import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { toast } from "react-toastify";




export async function POST(){
    const cookieStore =cookies();



    (await cookieStore).set("auth-token", "",{
        httpOnly:true,
        path:"/",
        expires:new Date(0),
    });


    return NextResponse.json({message:"Logged Out"}, {status:200})
}