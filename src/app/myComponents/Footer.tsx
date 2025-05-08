import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";

const Footer = () => {

    const getYear=():number=>{

        const date = new Date()
        return date.getFullYear()

    }


    return (
      <> 
    <div className="relative z-50 bg-[linear-gradient(60deg,_black_1%,_#4a4d4f_100%)] py-10 px-5 sm:px-10 h-auto sm:h-[650px] lg:h-[700px] w-screen full-bleed overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Download now and experience <br /> ease, like never before!
          </h1>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <Link href="/" className="flex justify-center">
              <div className="rounded-full border-4 border-white py-2 px-6 sm:py-3 sm:px-8 flex items-center gap-2 hover:bg-white/10 transition-colors">
                <SiAppstore className="text-white text-xl sm:text-2xl" />
                <span className="text-white text-lg sm:text-xl">for iOS</span>
              </div>
            </Link>

            <Link href="/" className="flex justify-center">
              <div className="rounded-full border-4 border-white py-2 px-6 sm:py-3 sm:px-8 flex items-center gap-2 hover:bg-white/10 transition-colors">
                <IoLogoGooglePlaystore className="text-white text-xl sm:text-2xl" />
                <span className="text-white text-lg sm:text-xl">for Android</span>
              </div>
            </Link>
          </div>
        </div>




        {/* Footer Links Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12  justify-items-center ">

          <div className="flex flex-col items-center sm:items-start space-y-3 ">
            <h2 className="text-white text-lg font-medium mb-3">CONTACT</h2>
            <p className="text-[#D3B466] text-sm hover:text-gray-300 transition-colors">
              hello@zaxbox.net
            </p>
            <div className=" flex justify-between gap-3">
            <FaLinkedinIn className="text-black text-2xl sm:text-2xl bg-white rounded-sm py-1 px-1" />
            <FaFacebookSquare  className="text-black text-2xl sm:text-2xl bg-white rounded-sm py-1 px-1" /> 
            <AiFillInstagram className="text-black text-2xl sm:text-2xl  bg-white rounded-sm py-1 px-1" />
            </div>
            
          </div>

          <div className="flex flex-col items-center sm:items-start space-y-3">
            <h2 className="text-white text-lg font-medium mb-3">PRODUCTS</h2>
            <p className="text-[#D3B466] text-sm hover:text-gray-300 transition-colors"><Link href={"/download"}>Crypto</Link> </p>
            <p className="text-[#D3B466] text-sm hover:text-gray-300 transition-colors"><Link href={"/download"}>Giftcards</Link></p>
            <p className="text-[#D3B466] text-sm hover:text-gray-300 transition-colors"><Link href={"/download"}>Bill Payments </Link> </p>
            <p className="text-[#D3B466] text-sm hover:text-gray-300 transition-colors"><Link href={"/download"}>  Virtual cards</Link></p>
          </div>

          <div className="flex flex-col items-center sm:items-start space-y-3">
            <h2 className="text-white text-lg font-medium mb-3">COMPANY</h2>
            <p className="text-[#D3B466] text-sm hover:text-gray-300 transition-colors"><Link href={"/about"}> About us</Link> </p>
            <p className="text-[#D3B466] text-sm hover:text-gray-300 transition-colors"><Link href={"/why-zaxbox"}>Why ZAXBOX </Link> </p>
            <p className="text-[#D3B466] text-sm hover:text-gray-300 transition-colors"><Link href={"/blog"}>Blog</Link> </p>
            <p className="text-[#D3B466] text-sm hover:text-gray-300 transition-colors">Career</p>
          </div>

          <div className="flex flex-col items-center sm:items-start space-y-3">
            <h2 className="text-white text-lg font-medium mb-3"><Link href={"/legal"}>LEGAL </Link></h2>
            <p className="text-[#D3B466] text-sm hover:text-gray-300 transition-colors"><Link href={"/privacy-policy"}>Privacy Policy </Link> </p>
            <p className="text-[#D3B466] text-sm hover:text-gray-300 transition-colors"><Link href={"/terms-of-service"}>Terms of Service </Link> </p>
          </div>
        </section>
      </div>
      <div className="flex border-1 w-full justify-center border-[#707070] mt-10 md:mt-[14%]"></div>
     <div className="pt-2 flex justify-center items-center">
     <span className="text-[#FFFFFF] text-center text-xs">© {getYear()} ZAXBOX Technologies Ltd. All Right Reserved.</span>
     </div>
    </div>
    
    </>
  );
};

export default Footer;