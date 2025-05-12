import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";


const prisma = new PrismaClient();


async function main(){


  const email = "blog@zaxbox.net";
  const plainPassword = "zaxbox.net@2025";




  const hashPassword =await bcrypt.hash(plainPassword, 10);


  const existingUser =await prisma.user.findUnique({where:{email}})

  if(existingUser){
    console.log("Admin uer already exits");
    return;
  }


  await prisma.user.create({
    data:{
      name:"Admin",
      email,
      password:hashPassword
    }
  });

  console.log("Admin user created successfully");


  main().catch((e) => {
    console.error(e);
    process.exit(1);
  }
  ).finally(async () => {
    await prisma.$disconnect();
  }
  );

}