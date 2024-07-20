import CallList from '@/components/CallList'
import React from 'react'

const Recordings = () => {
  return (
    <section className="flex flex-col gap-10 text-white size-full">
    <h1 className='text-3xl font-bold'>Recordings</h1>
    <CallList type='recordings' />
  </section>
  )
}

export default Recordings