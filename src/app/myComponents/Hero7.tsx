import Image from "next/image"

const Hero7 = () => {
  return (
    <>
    <div className="w-full px-2 lg:px-8 xl:px-10  h-[693px] hidden xl:block">
        
    <div className="flex w-full h-full">

        <div className="flex flex-[80%] bg-[#EFEBDF] h-full rounded-tr-4xl rounded-tl-4xl ">


            <div className="w-full flex ">
            <h1 className=" text-4xl font-thin xl:text-5xl lg:py-55 py-40 px-25 pl-15 md:py-12 xl:py-50 xl:px-38 leading-15 font-sans  overflow-hidden" >Easily navigable sleek UI with <span className="font-bold">Dark mode </span> feature <br/>
            <span className="mt-5 text-xl xl:text-2xl md:text-lg ">No needless navigation. <span className="bg-[#d3b46650] px-1 py-1 rounded-md">Made easy for you!</span> </span>
            </h1>
            </div>
        </div>



        
        <div className=" w-full flex-1/3 overflow-hidden">

            <Image
            src={"/imageH.png"}
            alt=""
            width={600}
            height={600}
            quality={100}
            className="z-10 absolute translate-x-[-48%] translate-y-[10%] md:translate-x-[-60%] "
            />
        </div>



    </div>

    </div>














   {/* TABS */}



   <div className="w-full px-2 lg:px-8 h-[450px] hidden sm:block xl:hidden">
        
        <div className="flex w-full h-full">
    
            <div className="flex flex-[80%] bg-[#EFEBDF] h-full rounded-tr-4xl rounded-tl-4xl  ">
    
    
                <div className="w-full flex ">
                <h1 className=" text-3xl font-thin  lg:py-22 py-40 px-25 pl-15 md:py-17 xl:py-50 xl:px-30 leading-15 font-sans md:leading-11 lg:leading-12  overflow-hidden" >Easily navigable sleek UI with <span className="font-bold">Dark mode </span> feature <br/>
                <span className="mt-5 text-xl xl:text-2xl md:text-lg ">No needless navigation. <span className="bg-[#d3b46650] px-1 py-1 rounded-md">Made easy for you!</span> </span>
                </h1>
                </div>
            </div>
    
    
    
            
            <div className=" w-full flex-1/3 overflow-hidden">
    
                <Image
                src={"/imageH.png"}
                alt=""
                width={400}
                height={400}
                quality={100}
                className="z-10 absolute translate-x-[-48%] translate-y-[10%] md:translate-x-[-55%] "
                />
            </div>
    
    
    
        </div>
    
        </div> 












      {/* MOBILE */}


      <div className="w-full px-4 py-2 flex h-[600px] sm:hidden">
        
        <div className=" w-full h-[610px]">
    
            <div className="flex  bg-[#EFEBDF] h-full rounded-tr-4xl rounded-tl-4xl  ">
    

            <h1 className=" text-3xl font-thin px-10 py-10 leading-9 font-sans text-center" >Easily navigable sleek UI with<br/> <span className="font-bold">Dark mode </span><br/> feature  <br/>
            <span className="mt-6 text-xl">No needless navigation. <span className="bg-[#d3b46650] px-1 py-1 rounded-md"><br/>Made easy for you!</span> </span>
            </h1>
            </div>
    
    
    
            
            <div className=" w-full flex justify-center">
    
                <Image
                src={"/imageH.png"}
                alt=""
                width={270}
                height={270}
                quality={100}
                className="z-10 sm:mt-[-75%] absolute flex justify-center mt-surface-duo mt-[-65%]"
                />
            </div>
    
    
    
        </div>
    
        </div>
     </>
  )
}

export default Hero7