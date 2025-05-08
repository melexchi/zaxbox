import Image from "next/image"

function Hero4() {
  return (
    <> 
    <div className="hidden md:block">
    <div className=" pl-8 xl:pl-15 py-8 w-full h-[450px] xl:h-[600px] flex flex-col md:flex-row">
      
    <div className="w-[70%] xl:w-[60%] bg-[#292929] h-full rounded-xl ">


        <h1 className="text-[#F5F5F5] px-10 xl:px-25 pt-15 xl:pt-30 py-10 font-bold text-3xl xl:text-5xl">Instant Gift Card Trading, No Hassle
        <div className="block w-30 h-1 mx-auto md:mx-0 rounded-tr-md rounded-br-md rounded-bl-md  border-b-8 border-[#D3B466] mt-5"></div>
        </h1>
        <p className="text-[#FFFFFF] px-10 xl:px-25 pt-0 py-10 leading-7 xl:leading-9 text-xl xl:text-2xl ">Easily convert your gift cards to cash <br /> or buy from a wide range of brands <br /> <span className="text-[#D3B466]">-</span><span className="text-[#D3B466]">all at the best value and with quick payouts.</span></p>
    </div>

        {/* IMAGE */}
    <div className="w-[80%] h-full absolute" style={{ transform: 'scale(0.8)' }}>

        <Image
        src={"/phoneslant.png"}
        alt=""
        width={1200}
        height={1200}
        quality={100}
        className="w-full h-auto relative left-[30%] object-contain"

        />
    </div>
    
    
    </div>
    </div>



        {/* MOBILE */}

        <div className="flex-col px- pt-12 p-4 absolute sm:hidden block overflow-x-hidden">


        <div className=" w-full h-[450px] bg-[#292929] rounded-2xl ">
            
        <h1 className="text-[#F5F5F5] px-10 x pt-5 xl:pt-30 py-10 font-bold text-2xl text-center">Instant Gift Card Trading, No Hassle
        <div className="block w-30 h-1 mx-auto md:mx-0 rounded-tr-md rounded-br-md rounded-bl-md  border-b-8 border-[#D3B466] mt-3"></div>
        </h1>
        <p className="text-[#FFFFFF] px-5 pt-0 py-5 leading-7  text-md ">Easily convert your gift cards to cash <br /> or buy from a wide range of brands <br /> <span className="text-[#D3B466]">-</span><span className="text-[#D3B466]">all at the best value and with quick payouts.</span></p>
        </div>
        <div className="">
            <Image
            src={"/phoneslant.png"}
            alt=""
            width={400}
            height={400}
            quality={100}
            className="relative bottom-50 left-10 z-10"
            />
        </div>

        </div>


    </>
  )
}

export default Hero4
