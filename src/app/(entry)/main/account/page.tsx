import { Separator } from '@/components/ui/separator'
import React from 'react'

function page() {
  return (
    <section className="account">

    <div className="flex flex-col space-y-4 items-center text-center">
           <header>
           <h2 className="font-semibold text-2xl mb-4 text-[#C3ACD0]">
     {`הגדרות חשבון `}
           </h2>
        </header>
        <Separator />
        </div>
    </section>
  )
}

export default page
