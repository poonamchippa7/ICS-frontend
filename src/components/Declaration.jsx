import React from 'react'

const Declaration = () => {
  return (
    <div className='border-2 border-black m-auto my-[2rem] max-w-4xl py-4 px-2'>
    <label className='font-semibold text-xl'>Declaration of the farmer</label>
    <div className='flex flex-col w-full my-[2rem] text-start text-lg'>
      <label className='flex'>
        {`I, the farmer, declare that the information provided above is correct
        and that I have understood the conditions for Organic Production and
        ICS rules and I agree to sign the ICS contract.`}
      </label>
      <div className='flex flex-row gap-4 my-4'>
          <div className='flex flex-col flex-1 gap-y-2'>
            <div><label className=''>Date:</label><input className='mx-2'/></div>
            <div><label>Place:</label><input className='mx-2'/></div>
          </div>
          <div className='flex flex-1'>
              <label>Siganture of farmer:</label><input className='mx-2'/>
          </div>
          
      </div>
    </div>
    <div className='flex flex-col w-full mb-[1rem] text-start text-lg'>
      <label className='flex'>
      I, the ICS manager, confirm that the above mentioned information is correct.
      </label>
      <div className='flex flex-row gap-4 my-4'>
          <div className='flex flex-col flex-1 gap-y-2'>
            <div><label>Date:</label><input className='mx-2' /></div>
            <div><label>Place:</label><input className='mx-2'/></div>
          </div>
          <div className='flex flex-1'>
              <label>Siganture of the ICS Manager for acceptance: </label><input className='mx-2'/>
          </div>
          
      </div>
    </div>
  </div>
  )
}

export default Declaration