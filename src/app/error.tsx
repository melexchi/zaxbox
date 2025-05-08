"use client"

interface ErrorProps {

    error: Error & {digest?: string};
    reset:()=> void

}



export default function Error({error, reset}: ErrorProps){

    return(

        <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-xl mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#D3B466] text-white rounded-lg hover:bg-black transition-colors"
        >
          Try Again
        </button>
      </div>



    )



}