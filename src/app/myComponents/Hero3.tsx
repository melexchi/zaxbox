import Image from "next/image"

const Hero3 = () => {
  return (
    <> 
    <div className="hidden xl:block bg-[#E6E3DB] w-full max-w-[380px] min-h-[50vh] mt-10 mx-auto md:max-w-[92%] md:rounded-2xl overflow-hidden relative">
      <div className="w-full px-6 py-10 md:px-12 lg:px-16 flex flex-col md:flex-row relative">
        <div className="md:w-1/2 z-10 relative">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] mb-4 pl-10 pt-5">
            Buy & Sell
            <br />
            Crypto Seamlessly
            <div className="block w-30 h-1 mx-auto md:mx-0 rounded-tr-md rounded-br-md rounded-bl-md  border-b-8 border-[#D3B466] mt-5"></div>
          </h1>
      
          <p className="text-gray-600 mb-8 max-w-md pl-10">
            Enjoy <span className="font-bold">fast</span>,  <span className="font-bold">secure</span>, and <span className="text-lg font-bold">stress-free</span> cryptocurrency transactions with
            real-time rates and instant delivery.
          </p>

          {/* Bitcoin image container with fixed height */}
          <div className="relative h-[180px] md:h-[270px] lg:h-[200px] overflow-visible">
            <Image
              src="/bitcoinL.png"
              alt="Bitcoin coin"
              width={800}
              height={800}
              quality={100}
              className="absolute bottom-[-30%]-[-1000%] left-[-28%] w-[120%] md:w-[190%] lg:w-[130%] max-w-none object-contain top-[-50%]"
              priority
            />
          </div>
        </div>

        <div className="md:w-full flex justify-center md:justify-end items-center mt-4 md:mt-0 absolute left-[10%] top-[-25%]">
          <Image
            src="/binanceL.png"
            alt="Binance coin"
            width={800}
            height={800}
            quality={100}
            className="w-full h-auto max-w-[min(850px,90vw)] object-contain"
          />
        </div>
      </div>
    </div>



        {/* Mobile Version */}

      <div className="xl:hidden flex flex-col mr-[3%] sm:flex-row px-4 py-4 bg-[#E6E3DB] mx-4 my-4 rounded-2xl md:mx-8 md:my-8 text-center sm:text-left h-[370px]">
        
        {/* Right */}
        <div className="w-full sm:w-[50%] md:pl-10 overflow-visible md:overflow-clip  relative">

            <h1 className="text-4xl md:text-[30px] lg:text-[50px] font-bold leading-tight mb-3 text-[#292929] block">  Buy & Sell
            <br />
            Crypto Seamlessly</h1>
            <div className="block w-30 h-1 mx-auto md:mx-0 rounded-tr-md rounded-br-md rounded-bl-md  border-b-8 border-[#D3B466] mt-5"></div>
            <p className="text-gray-600 mt-3">
            Enjoy <span className="font-bold">fast</span>,  <span className="font-bold">secure</span>, and <span className="text-lg font-bold">stress-free</span> cryptocurrency transactions with
            real-time rates and instant delivery.
          </p>
        
        </div>


          {/* Left */}
        <div className="w-full flex justify-end">
          <Image 
            src={"/binanceL.png"}
            alt=""
            width={400}
            height={400}
            quality={100}
            className="object-contain top-[-18%] md:top-[-20%] relative w-full left-[5%] "

          />

          <Image
            src={"/bitcoinL.png"}
            alt=""
            width={300}
            height={300}
            quality={100}
            className="hidden sm:block absolute top-[10%] sm:top-[96%] md:top-[80%] lg:top-[90%] custom-top-position"

          />
        </div>
        
      </div>


      </>
  )
}

export default Hero3
