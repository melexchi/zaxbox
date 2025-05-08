import Image from "next/image"

const Hero5 = () => {
  return (

    <> 
    <div className="relative sm:block mt-150 sm:mt-10 lg:mt-40 hidden">
    <div className="w-full h-[450px] flex  md:flex-row absolute sm:top-[110%] overflow-hidden px-4 sm:px-9 flex-col-reverse ">
        
     <div className="w-full  flex  sm:h-[75%] xl:h-full custom-gradient rounded-2xl">

    <Image
     src={"/girlPhone.png"}
     alt=""
     width={500}
     height={500}
     quality={100}
        className="flex justify-center items-center w-full object-contain "
    />

     </div>
     <div className="w-full flex flex-col bg-[#FFFFFF] rounded-tr-2xl rounded-br-2xl h-[340px] sm:h-[340px] md:h-full xl:h-full">
      
        <h1 className="flex text-left px-2 py-12 md:pl-20 flex-col pt-20 md:pt-2 lg:pt-5 sm:pt-4 xl:pt-20 text-2xl xl:text-5xl sm:text-3xl">Shop and Pay Online with Confidence

        <div className=" block w-30 h-1 mx-auto md:mx-0 rounded-tr-md rounded-br-md rounded-bl-md  border-b-8 border-[#D3B466] mt-4 "></div>
        <p className="flex text-left text-[20px] font-normal pr-20 md:pr-10 sm:pr-5 pt-5 lg:pr-15">Create a secure virtual card instantly for global payments. Ideal for shopping, subscriptions, and everyday transactions.</p>

        </h1>
      
     </div>
     

    </div>
    </div>



    {/* MOBILE */}





    <div className="relative mt-160 sm:mt-40 block sm:hidden top-55">
    <div className="w-full h-[450px] flex  md:flex-row absolute sm:top-[110%]  px-4 sm:px-9 flex-col-reverse ">
        
     <div className="w-full  flex h-400px custom-gradient rounded-2xl">

    <Image
     src={"/girlPhone.png"}
     alt=""
     width={500}
     height={500}
     quality={100}
        className="flex justify-center items-center w-full object-contain"
    />

     </div>
     <div className="w-full flex flex-col bg-[#FFFFFF] rounded-tl-2xl rounded-tr-2xl">
      
        <h1 className="flex text-center px-2 py-12 md:pl-20 flex-col">Shop and Pay Online with Confidence

        <div className=" block w-30 h-1 mx-auto rounded-tr-md rounded-br-md rounded-bl-md  border-b-8 border-[#D3B466] mt-4 "></div>
        <span className="text-center text-[20px] px-8 font-normal pt-5 block">Create a secure virtual card instantly for global payments. Ideal for shopping, subscriptions, and everyday transactions.</span>

        </h1>
      
     </div>
     

    </div>
    </div>




    </>
  )
}

export default Hero5