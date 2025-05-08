import Image from 'next/image'
import React from 'react'

const Hero1 = () => {
  return (
<div className="w-full  flex items-center justify-center px-4 pt-8 ml-[-5px] lg:ml-[-1px] md:ml[-1px] ">
  <div className="max-w-[1300px] w-full flex flex-col sm:flex-row items-center justify-between">
    
    {/* Left Side */}
    <div className="flex-1 md:pl-10 mr-[15%] p-0">
      <h1 className='text-3xl md:text-[45px] font-bold leading-tight mb-3  ml-0 lg:ml-[100px] w-full  text-[#A0763F] '>
        Trade Smart, Pay Easy!
      </h1>
      <p className="text-lg text-[#292929] mb-6 ml-0 lg:ml-[100px] w-full">
        Buy, Sell & Exchange Crypto, Gift Cards & Virtual Cards in Seconds.
      </p>
      <div className="flex gap-4 ml-0 lg:ml-[100px] w-full">
        <Image src="/googleplay.png" alt="" width={150} height={150} />
        <Image src="/appleS.png" alt="" width={150} height={150} />
      </div>
    </div>

    {/* Right Side */}

    <div className="flex-1 relative flex justify-center items-center mt-10 md:mt-0">
        
      {/* Card Behind */}

<div className=" hidden lg:block absolute top-[20%] right-20 border-t border-gray-300 my-6 w-[75%] border-1"></div>
<div className=" hidden lg:block absolute right-[88.8%] top-[126.5px] border-t border-gray-300 my-6 w-[10%] border-1 rotate-[-38deg] "></div>
      <div className="absolute top-[35%] right-[-10%] lg:right-[15%] lg:top-[25%] z-0 bg-white rounded-xl shadow-lg px-6 py-4 w-[180px] " >
        <ul className="space-y-2 text-right text-sm text-[#292929] font-medium">
          <li className="flex gap-4 justify-end">Crypto <span className="text-[#A0763F]">◆</span></li>
          <li className="flex gap-4 justify-end">Giftcard <span className="text-[#A0763F]">◆</span></li>
          <li className="flex gap-4 justify-end">Bill Payments <span className="text-[#A0763F]">◆</span></li>
          <li className="flex gap-4 justify-end">Virtual Cards <span className="text-[#A0763F]">◆</span></li>
          <li className="flex gap-4 justify-end">Virtual Number <span className="text-[#A0763F]">◆</span></li>
        </ul>
      </div>

      {/* Image */}
      <Image 
        src="/girlsS.png" 
        alt="Hero Image"
        width={500}
        height={600}
        quality={100}
        priority
        className="relative z-10 object-contain ml-[-125px] mr-[20px] lg:mr-[50%] sm:mr-[35%]"
      />
</div>

    </div>
  </div>


  )
}

export default Hero1