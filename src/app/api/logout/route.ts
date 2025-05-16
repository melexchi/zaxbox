import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  
  const cookieStore = cookies();
  
  
  (await cookieStore).set({
    name: "auth-token",
    value: "",
    httpOnly: true,
    path: "/",
    expires: new Date(0), 
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return NextResponse.json(
    { message: "Logged Out" },
    { 
      status: 200,
      headers: {
      
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      }
    }
  );
}