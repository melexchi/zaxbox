// import { NextResponse } from "next/server";
// import { RegisterSchema } from "@/lib/validations";
// import { PrismaClient } from "@prisma/client";
// import { hashPassword } from "@/lib/hash";


// const prisma = new PrismaClient();

// export async function POST(req:Request){

//     try{

//         const body =await req.json();
//         const validated =RegisterSchema.safeParse(body);

//         if(!validated.success){
//             return NextResponse.json({error: "Invalid Input"}, {status: 400});
//         }

//         const {name,email,password} = validated.data;

//         const existingUser =await prisma.user.findUnique({where:{email}})

//         if(existingUser){
//             return NextResponse.json({error: "User already exists"}, {status: 400});
//         }

//         const hashed = await hashPassword(password);


//         await prisma.user.create({
//             data:{name,email,password:hashed}
//         });

//         return NextResponse.json({message: "User created successfully"}, {status: 201});
//     }catch(err){
//         return NextResponse.json({error: "Internal Server Error"}, {status: 500});
//     }
// }