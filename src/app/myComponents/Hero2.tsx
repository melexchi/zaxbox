import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 pt-8 ">
      <div className="max-w-[1300px] w-full flex flex-col-reverse md:flex-row items-center justify-between gap-2 lg:gap-20">

 
        <div className="relative flex-1 w-full p-0 md:pl-10 mb-10 md:mb-0">

          <div className="absolute top-[50%] md:top-[44%] left-0 md:left-4 w-full h-[50%] md:h-[55%] bg-[#D6D6D6] z-0 rounded-2xl"></div>
          

          <div className="relative z-10 w-full max-w-[380px] mx-auto px-4 md:px-0">
            <Image 
              src="/guyP.png" 
              alt="Person illustration" 
              width={380}
              height={280}
              quality={100}
              className="object-contain w-full"
              sizes="(max-width: 768px) 90vw, 380px"
              priority
            />
          </div>
        </div>

 
        <div className="flex-1 w-full text-center md:text-left p-4 md:pl-10 md:mr-[-20px]">
          <h1 className='text-4xl md:text-[30px] lg:text-[50px] font-bold leading-tight mb-3 text-[#292929]'>
            The 1st All-In-One Fintech App in Africa!
            <span className="block w-30 h-1 mx-auto md:mx-0 rounded-tr-md rounded-br-md rounded-bl-md  border-b-8 border-[#D3B466] mt-5"></span>
          </h1>
          
          <p className="text-lg lg:text-2xl text-[#292929] mb-6">
            Seamless Transactions, Limitless Possibilities!
          </p>
                <button className="bg-[#F5E9C7] px-8 py-3 border-0 flex gap-3 items-center text-lg font-bold justify-center mx-auto md:mx-0 w-full max-w-[200px] md:w-auto rounded-md
                shadow-[0_4px_10px_rgba(0,0,0,0.1)]
                hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]
                active:shadow-[0_2px_8px_rgba(0,0,0,0.1)]
                transition-all duration-300 ease-out">
                <ArrowRight className="w-5 h-5" />
                 <span className="border-r-4 border-black h-4 ml-[-10px]"></span>
                    <span>Get Started</span>
                    
        </button>
        </div>

      </div>
    </div>
  );
};

export default Hero2;