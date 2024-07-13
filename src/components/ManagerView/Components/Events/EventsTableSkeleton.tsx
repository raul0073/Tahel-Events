import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function EventsTableSkeleton() {
  return (
    <div className='w-full h-full'>
        <Skeleton className="w-[90%] mx-auto h-5 rounded-lg mb-2 px-2" />
        <Skeleton className="w-[90%] mx-auto h-5 rounded-lg mb-2 px-2" />
        <Skeleton className="w-[90%] mx-auto h-5 rounded-lg mb-2 px-2" />
        <Skeleton className="w-[90%] mx-auto h-5 rounded-lg mb-2 px-2" />
    </div>
  ) 
}

export default EventsTableSkeleton