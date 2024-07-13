import { Spinner } from '@radix-ui/themes'
import React from 'react'

function LoadingComp() {
  return (
    <div className='w-full min-h-[80vh] flex justify-center items-center overflow-hidden'>
        <Spinner size='3' />
    </div>
  )
}

export default LoadingComp
