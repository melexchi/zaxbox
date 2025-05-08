"use client"
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function Navbar() {


  const pathName = usePathname();
  const [isOpen, setIsOpen]= useState(false)


  useEffect(()=>{
    setIsOpen(false)
  },[pathName])





    return (
<div className="animate-fade-in">
        <nav className="sticky top-0 z-50  backdrop-blur-sm flex mx-auto px-3  justify-between items-center lg:px-20 lg:py-8 md:px-5 py-5 ">
           <Link  href={"/"} className="flex items-center font-bold sm:text-[25px] text-[30px]  font-sans text-[#292929]" >
           <Image src={"/logo1.png"} alt="" width={50} height={50} className="mr-2 w-[50px] h-[50px] md:w-[40px] md:h-[40px]"/>
             <h2 className="text-[24px] sm:text-[20px] font-[900] ">ZAXBOX</h2>
           
           </Link> 
            
           <div className="hidden sm:flex flex-col mt-4 space-y-2 ld:ml-40">
            <div className="flex items-center space-x-8">
                <Link href="/about" className="text-gray-900 hover:text-[#D3B466] font-medium text-sm transition-colors">
                ABOUT US
                </Link>
                <Link href="/why-zaxbox" className="text-gray-900 hover:text-[#D3B466] font-medium text-sm transition-colors">
                WHY ZAXBOX?
                </Link>
                <Link href="/products" className="text-gray-900 hover:text-[#D3B466] font-medium text-sm transition-colors">
                PRODUCTS
                </Link>
               
            </div>
            <div className="border-b-3 border-gray-200 mt-2 shadow-2xl" />
            </div>

          <Link 
            href="/download" 
            className="hidden sm:block mr-4 px-6 py-2 bg-[#D3B466] text-white font-sans font-medium text-sm
             rounded-tl-2xl rounded-bl-2xl rounded-br-2xl 
             shadow-[0_4px_0_0_#b89e51] border border-[#b89e51]
             hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#b89e51] 
             transition-all duration-150 ease-in-out"
          >
            DOWNLOAD APP
          </Link>

          {/* Mobile Menu */}
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
            <Image 
            src="/hamburger.png" 
            alt="Menu" 
            width={40} 
            height={40}
            className="text-foreground"
          />
            </DropdownMenuTrigger>
            <DropdownMenuContent
            onInteractOutside={(e)=>{
              if(e.target instanceof HTMLElement && e.target.closest("a")){
                return;
              }
              setIsOpen(false)
            }}
            className="mt-4 min-w-[190px] py-15 bg-[#E1C771] border-0 rounded-none  rounded-tl-2xl rounded-bl-2xl space-y-2 mb-20">
              <DropdownMenuItem asChild 
              onClick={() => setIsOpen(false)}
              className=" flex justify-center text-sm font-medium cursor-pointer"><Link href="/about">ABOUT US</Link></DropdownMenuItem>

              <DropdownMenuItem asChild
              onClick={() => setIsOpen(false)}
               className=" flex justify-center text-sm font-medium cursor-pointer"><Link href="/products">PRODUCTS</Link></DropdownMenuItem>

              <DropdownMenuItem asChild 
              onClick={() => setIsOpen(false)}
              className=" flex justify-center text-sm font-medium cursor-pointer"><Link href="/why-zaxbox">WHY ZAXBOX?</Link></DropdownMenuItem>

              <DropdownMenuItem asChild 
              onClick={() => setIsOpen(false)}
              className=" flex justify-center text-sm font-medium cursor-pointer"><Link href="/download">DOWNLOAD APP</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        </nav>     
       
       </div>
    )
  }