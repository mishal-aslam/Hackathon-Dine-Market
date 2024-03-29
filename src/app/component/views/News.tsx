import React from 'react'

const News = () => {
  return (
    <div className=' my-5  relative text-center space-y-4 min-h-[15vh] md:h-[25vh] lg:min-h-[25rem] flex flex-col justify-center items-center text-gray-800"'>
        <h6 className='absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50'>Newsletter</h6>
        <h6 className='text-3xl md:text-4xl font-bold'>Subscribe Our Newsletter</h6>
        <p className='max-w-3xl text-lg font-medium' >Get the latest information and promo offers directly</p>
        <div className='flex gap-4 flex-wrap items-center justify-center '>
<input type="text" className='border border-gary-600 py-1 px-2 md:px-4 flex flex-grow w-80' placeholder='Input email address' />
<button className="text-white bg-black border border-gray-500 px-4 py-2">Get Started</button>
      </div>
    </div>
  )
}

export default News