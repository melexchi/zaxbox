import Image from 'next/image'
import React from 'react'

function about() {
  return (
    <> 
    <div className='w-full h-auto p-2 ml-[-5%] mt-[-1px]  xl:mt-[-40px] hidden md:block mb-2 lg:mb-10 xl:mb-30'>
    <div className="w-full px-0 flex flex-row pl-0 md:pl-15 xl:pl-40 gap-20 xl:gap-30">
      <div className="relative w-[350px] h-[230px] ml-[50px] mt-[80px] lg:mt-[15%] xl:mt-[30px] xl:w-[500px] xl:h-[500px]">
        <div className="absolute inset-0 bg-[#ceb8818e] rounded-4xl rotate-[-12deg] origin-bottom-right z-0 mt-5 xl:mt-25" />

      
        <div className="absolute inset-0 flex items-end justify-end rotate-[6deg] bg-white rounded-4xl z-10 overflow-visible mt-5 xl:mt-24 ">
          <div className="overflow-visible">

          <Image 
            src="/manPointing.png"
            alt=""
            width={700}
            height={700}
            quality={100}
            className='w-auto h-auto object-cover' 
          />
          </div>
        </div>
      </div>

      <div className="mt-10 w-[400px] xl:w-[50%]">
        <h2 className='text-2xl xl:text-3xl font-bold text-[#A0763F] mt-5 xl:mt-30 flex text-right'>About US
        </h2>
        <div className="block w-30 h-1 mx-auto md:mx-0 rounded-tr-md rounded-br-md rounded-bl-md  border-b-8 border-[#D3B466] mt-2 mb-3"></div>
        
         <p className=' font-light text-xl leading-7'> Zaxbox is your premier destination for trading Crypto/GiftCards at the best rate in Africa.</p> <br /><br />
         We also provide service for; 

        <div className=" px-2 py-4 w-[180px] " >
        <ul className="space-y-2 text-left text-sm text-[#292929] font-medium">
          <li className="flex gap-4 justify-start"> <span className="text-[#A0763F]">◆</span> Crypto (buy and sell)</li>
          <li className="flex gap-4 justify-start"> <span className="text-[#A0763F]">◆</span>Giftcard</li>
          <li className="flex gap-4 justify-start"> <span className="text-[#A0763F]">◆</span>Bill Payments</li>
          <li className="flex gap-4 justify-start"> <span className="text-[#A0763F]">◆</span>Virtual Cards</li>
          <li className="flex gap-4 justify-start"> <span className="text-[#A0763F]">◆</span>Virtual Number</li>
        </ul>
      </div>
         
      </div>
      
    </div>
    </div>





    {/* MOBILE */}


      <div className="flex flex-col sm:hidden p-2 h-auto">



      <div className="mt-10 px-2">
        <h2 className='flex  text-2xl font-bold text-[#A0763F]  text-start'>About US
        </h2>
        <div className="block w-30 h-1  rounded-tr-md rounded-br-md rounded-bl-md  border-b-8 border-[#D3B466] mt-2 mb-3"></div>
        
         <p className=' font-light text-xl leading-7'> Zaxbox is your premier destination for trading Crypto/GiftCards at the best rate in Africa.</p> <br />
         We also provide service for; 

        <div className=" px-2 py-4 w-[180px] " >
        <ul className="space-y-2 text-left text-sm text-[#292929] font-medium">
          <li className="flex gap-4 justify-start"> <span className="text-[#A0763F]">◆</span> Crypto (buy and sell)</li>
          <li className="flex gap-4 justify-start"> <span className="text-[#A0763F]">◆</span>Giftcard</li>
          <li className="flex gap-4 justify-start"> <span className="text-[#A0763F]">◆</span>Bill Payments</li>
          <li className="flex gap-4 justify-start"> <span className="text-[#A0763F]">◆</span>Virtual Cards</li>
          <li className="flex gap-4 justify-start"> <span className="text-[#A0763F]">◆</span>Virtual Number</li>
        </ul>
      </div>
         
      </div>


        
        <div className="flex justify-center w-full pt-18 pr-8">

          <div className="w-[70%] h-auto">
            <div className="w-full  inset-0 bg-[#ceb8818e] rotate-[-12deg] z-0 rounded-4xl ">
              <div className="w-full  inset-0 bg-white rotate-[20deg] z-10 origin-bottom-right rounded-4xl overflow-hidden">
              <Image 
            src="/manPointing.png"
            alt=""
            width={200}
            height={200}
            quality={100}
            className='w-auto h-auto object-cover' 
          />
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default about
