import { Highlighter } from "@/components/ui/highlighter"


function Hero() {
  return (
    <div className="relative h-[800px] w-full overflow-hidden text-white flex min-h-screen items-center justify-center px-6 py-24">
         <main className="absolute inset-0 z-0 h-full w-full overflow-hidden">
         <video
          src="/videos/herovideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black"
          aria-hidden="true"
        />
          </main>
        <div className='relative z-10 overflow mb-72'>
            <div>
            <h1 className='text-3xl md:text-3xl font-bold mb-6 text-center'>
            The Official Student Club of 
            {" "}
            <Highlighter action="highlight" color="rgb(19, 105, 226)">
            Electronics & Telecommunication 
            </Highlighter>{" "}
            </h1>
            </div>
            <div>
          <p className='text-center text-lg md:text-1xl max-w-3xl mx-auto text-whites-600 dark:text-gray-300'>
          Where technology, culture, and sports converge to build skills, leadership, and a vibrant student community at DSCE.
          </p>
            </div>
        </div>
    </div>
  )
}

export default Hero
