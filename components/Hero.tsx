import React from 'react'
import { DotPattern } from './ui/dot-pattern'

function hero() {
  return (
    <div className="relative h-[800px] w-full overflow-hidden flex min-h-screen items-center justify-center">
  <DotPattern className='opacity-20' />
  <h1>Hero Section</h1>
</div>
        
  )
}

export default hero