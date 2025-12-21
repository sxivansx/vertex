import React from 'react'
import { DotPattern } from './ui/dot-pattern'
import { Highlighter } from "@/components/ui/highlighter"

function hero() {
  return (
    <div className="relative h-[800px] w-full overflow-hidden text-white flex min-h-screen items-center justify-center border-b border-white/10 px-6 py-24">
        <DotPattern className='opacity-20' />
            <div className='overflow'>
                <div>
                <h1 className='text-5xl md:text-7xl font-bold mb-6  text-center'>
                The Official Student Club of 
                {" "}
                <Highlighter action="highlight" color="#87CEFA">
                Electronics & Telecommunication 
                </Highlighter>{" "}
                </h1>
            </div>
            <div>
                <p className='text-center text-lg md:text-2xl max-w-3xl mx-auto text-whites-600 dark:text-gray-300'>
                Where technology, culture, and sports converge to build skills, leadership, and a vibrant student community at DSCE.
                </p>
            </div>
            </div>
    </div>
        
  )
}

export default hero