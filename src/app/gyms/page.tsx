import { GymTable } from '@/components/gym-table'
import { Button } from '@/components/ui/button'
import React from 'react'

function Page() {
  return (
    <section className='p-6 flex flex-col'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Gyms</h1>
        <Button>Add Gym</Button>
      </div>
    
    <hr className='my-4' />
        <GymTable />
    </section>
  )
}

export default Page