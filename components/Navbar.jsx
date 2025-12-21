import React from 'react'
import Link from 'next/link'

function navbar() {
  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out`}>
        <div className='flex-shring-0'>
            <Link href={"/"}>Vertex logo</Link>
        </div>

    </header>
  )
}

export default navbar