import CallList from '@/components/CallList'
import React from 'react'

const Upcomings = () => {
  return (
    <section className="flex flex-col gap-10 text-white size-full">
    <h1 className='text-3xl font-bold'>
      Upcoming
    </h1>

    <CallList type='upcoming' />
  </section>
  )
}

export default Upcomings