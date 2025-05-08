import { Frown } from "lucide-react";

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-8">
          <Frown width={150} height={150} > The page you're looking for doesn't exist.</Frown>
          
        </p>
        <a 
          href="/" 
          className="px-6 py-3 bg-[#D3B466] text-white rounded-lg hover:bg-black transition-colors"
        >
          Return Home
        </a>
      </div>
    );
  }
  
  export const metadata = {
    title: '404 Not Found',
  };