import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";



export function middleware(request:NextRequest){

    const pathname =request.nextUrl.pathname
    

    if(pathname.startsWith('/admin')){
        const authToken = request.cookies.get('auth-token')?.value

        if(!authToken){
            return NextResponse.redirect(new URL('auth/login' , request.url))
        }
    }
    return NextResponse.next()
}


export const config= {
    matcher : [
        '/admin/:path*',
    ]
}


