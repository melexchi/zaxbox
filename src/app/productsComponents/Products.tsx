"use client"
import Image from 'next/image';
import React, { useCallback } from 'react'
import { useState, useRef, useEffect } from 'react'



interface Slide{
    title:string,
    description:string,
    image:string,
}


const slideData: Slide[] = [

    {
        title: "Crypto",
        description: "Redefining crypto with secure, lightning-fast transactions. Empowering users with smart tools to invest, trade, and grow digital wealth.",
        image: "/cryptoC.png"
    },
    {
        title: "GiftCards",
        description: "Zaxbox brings crypto and gift cards together—instantly trade digital assets for top brands. Fast, seamless, and globally accessible rewards.",
        image: "/giftCard.png"
    },
    {
        title: "Bill Payments",
        description: "Pay bills using crypto—fast, easy, and secure. Convert digital assets into real-world utility with just a few taps.",
        image: "/billP.png"
    },
    {
        title: "Virtual Cards",
        description: "Generate virtual cards instantly using crypto. Shop online securely, manage spending easily, and stay in control with real-time tracking and privacy.",
        image: "/virtualC.png"
    },
    {
        title: "Virtual Number",
        description: "Create virtual numbers in seconds. Protect your privacy, verify accounts effortlessly, and stay secure while managing communications across platforms globally.",
        image: "/virtualN.png"
    }

]


const SLIDE_INTERVAL = 5000; 
const TRANSITION_DURATION = 300;
const LOADING_INTERVAL = 50;



const Products=()=>{

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
    const progressRef = useRef<NodeJS.Timeout |number| null>(null);
    


    const handleNextSlide = useCallback(() => {
        setIsTransitioning(true);
        setCurrentSlide(prev => (prev + 1) % slideData.length);
        setLoadingProgress(0);
      }, []);


    useEffect(() => {
        autoPlayRef.current=setInterval(handleNextSlide,SLIDE_INTERVAL)
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, []);

        useEffect(() => {
            if (!isTransitioning) return;
    
            const timer = setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
            return () => clearTimeout(timer);
        }, [isTransitioning]);


 useEffect(() => {
    const startLoading=()=>{

        setLoadingProgress(0);
        const interval= setInterval(()=>{
            setLoadingProgress((prev)=>{
                if (prev >= 100) {
                    clearInterval(interval);
                    return 0;
                }
                return prev + 1;
            })
        },LOADING_INTERVAL)
        progressRef.current = interval
    }    
    
    startLoading()
    
    return () => {
        if (progressRef.current) {
            clearInterval(progressRef.current);
        }
    };

 },[currentSlide]);




return(

<>
<div className="w-full h-auto min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row overflow-hidden mb-5 p-3 sm:p-5 bg-white rounded-3xl shadow-lg fold-full-image">
      {/* Image Section - Top on mobile, Right on desktop */}
      <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-full relative order-1 md:order-2 flex items-center justify-center mt-1 xl:mt-30 md:mt-20">
        {slideData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                width={500}
                height={500}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
                priority={index === 0}
                className="object-contain max-h-full max-w-full p-2 xl:max-w-[150%] xl:max-h-[150%]"
                quality={100}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Text Section - Bottom on mobile, Left on desktop */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col p-4 sm:p-6 md:p-10 relative order-2 md:order-1 z-10 bg-white">
        {/* Custom scrollbar indicator - keeping your original implementation */}
        <div
          className="absolute left-3 w-1 bg-gray-200 rounded-full overflow-hidden ml-2"
          style={{
            top: "2rem",
            bottom: "3rem",
            height: "calc(100% - 3rem)",
          }}
        >
          <div
            className="w-full bg-gray-200 rounded-full transition-all duration-300 ease-in-out"
            style={{
              height: "100px",
              transform: `translateY(${currentSlide * 60}px)`,
            }}
          >
            <div
              className="w-full h-[500px] bg-[#D3B466] transition-all duration-50 ease-linear"
              style={{ height: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex-grow overflow-y-auto pl-8 xl:pl-25 pr-4 hide-scrollbar">
          {slideData.map((slide, index) => (
            <div key={index} className="py-3 sm:py-4 mb-2 sm:mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{slide.title}</h2>
              <p
                className={`text-sm sm:text-base md:text-lg text-gray-600 transition-all duration-500 ${
                  index === currentSlide ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

</>

)





}



export default Products;