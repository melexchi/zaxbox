import Image from "next/image"




const download=()=>{

return(
<>
 <div className=" w-full h-full p-5 pb-2 px-2 xl:px-15 hidden sm:block">

    <div className="w-full bg-[#d3b46628] h-[350px] lg:h-[450px] xl:h-[550px] rounded-2xl overflow-hidden">

        <div className="flex flex-col sm:flex-row w-full px-0 sm:px-2 lg:px-4 xl:px-15 relative ">

        <div className=" pt-2 md:pt-[12%] xl:pt-[12%] left-[10%] xl:left-[15%] absolute">
            <h1 className="text-[#A0763F] font-bold">Download ZAXBOX App<br />
                 to get started</h1>
                 <p className="pt-5 font-light text-md text-gray-900">AVAILABLE ON:</p>
                 <div className="flex flex-row gap-2 mt-5">
                 
                    <Image
                    src={"/googleplay.png"}
                    alt=""
                    width={150}
                    height={150}
                    quality={100}
                    />

                   <Image
                    src={"/appleS.png"}
                    alt=""
                    width={150}
                    height={150}
                    quality={100}
                    />

                 </div>
        </div>

        <div className="w-full absolute min-h-[800px] left-[40%]"> 
  
        
            <div className="absolute top-[-56%] left-40 z-0"> 
            <Image
            src="/slantPhone1.png"
            alt="Phone 1"
            width={500}
            height={500}
            quality={100}
            sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
            />
        </div>

        
        <div className="absolute bottom-[-30px] left-5 z-10"> 
            <Image
            src="/slantPhone1.png"
            alt="Phone 2"
            width={500}
            height={500}
            quality={100}
            sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
            />
        </div>

</div>
     </div>

    </div>
       
 </div>
        
        



        {/* MOBILE */}



    <div className=" w-full h-full p-5 pb-2 px-2 sm:hidden">

     <div className="w-full bg-[#d3b46628] h-[380px] rounded-2xl overflow-hidden">
        <div className="flex relative  w-full">
        <div className=" pt-20 pl-7">
            <h1 className="text-[#A0763F] text-2xl font-bold">Download ZAXBOX <br /> App 
                 to get started</h1>
                 <p className="pt-5 font-light text-md text-gray-900">AVAILABLE ON:</p>
                 <div className="flex flex-row gap-2 mt-5">
                 
                    <Image
                    src={"/googleplay.png"}
                    alt=""
                    width={120}
                    height={100}
                    quality={100}
                    />

                   <Image
                    src={"/appleS.png"}
                    alt=""
                    width={120}
                    height={100}
                    quality={100}
                    />

                 </div>
        </div>        
           
        <div className="absolute left-50 top-[-70%] w-full"> 
            <Image
            src="/slantPhone1.png"
            alt="Phone 1"
            width={200}
            height={200}
            quality={100}
            sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
            />
        </div>
        
        <div className=" absolute mt-[80%] left-10 z-10"> 
            <Image
            src="/slantPhone1.png"
            alt="Phone 2"
            width={200}
            height={200}
            quality={100}
            sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
            />
        </div>


     </div>

    </div>
       
 </div>
        
        
</>
    )
}


export default download