import Image from "next/image";

const Hero6 = () => {
  return (

    <> 
    <div className="flex flex-col sm:flex-row w-full h-auto px-4 sm:px-10 md:px-20 py-12 pt-180 sm:pt-100 xl:pt-120 ">


      {/* Left  */}
      <div className="w-full sm:w-1/2 h-[450px] bg-[#EFEBDF]  rounded-2xl xl:h-[600px] px-12 overflow-hidden">
        <h1 className="text-2xl font-bold xl:text-5xl sm:text-3xl pt-12 text-center sm:text-start">Virtual Numbers
        <div className=" block w-30 h-1 mx-auto md:mx-0 rounded-tr-md rounded-br-md rounded-bl-md  border-b-8 border-[#D3B466] mt-4  mb-6 xl:mb-12"></div>
        </h1>
        <span className="text-md font-normal block text-center sm:text-start">Stay connected anywhere anytime on any device. Your business active 24/7.</span>



        <div className="w-full flex justify-center mt-15 sm:mt-15 md:mt-2 lg:mt-2  xl:mt-21">

        <Image 
        src={"/phoneBlack.png"}
        alt=""
        width={600}
        height={400}
        quality={100}
        className=" flex justify-center xl:translate-y-26  translate-y-0  sm:translate-y-16 surface:translate-y-30 "
        />
        </div>
      </div>




      {/* Right  */}
      <div className="w-full sm:w-1/2 h-[450px] bg-[#D3B466] rounded-2xl xl:h-[600px] px-12 overflow-hidden">
        <h1 className="text-2xl font-bold xl:text-5xl sm:text-3xl pt-12 text-center sm:text-start">Pay bills & Recharge
        <div className=" block w-30 h-1 mx-auto md:mx-0 rounded-tr-md rounded-br-md rounded-bl-md  border-b-8 border-[#FFFFFF] mt-4 mb-6 xl:mb-12"></div>
        </h1>
        <span className="text-md font-normal block text-center sm:text-start">Recharge airtime pay bills and stay connected without stress anytime anywhere in seconds.</span>


        <div className="w-full flex justify-center mt-6 sm:mt-6 md:mt-2 lg:mt-2 xl:mt-15">

        <Image 
        src={"/phoneV.png"}
        alt=""
        width={600}
        height={400}
        quality={100}
        className="flex justify-center translate-y-5  max-sm:translate-y-18 sm:translate-y-24  md:translate-y-18 "
        />
        </div>
      </div>



    </div>





        </>
  );
};

export default Hero6;
