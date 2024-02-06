import React from 'react'

const TrailerTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] md:pt-[10%] px-8 md:px-24 absolute bg-gradient-to-r from-black'>
      <h1 className='text-lg sm:text-xl md:text-6xl font-bold text-white'>{title}</h1>
      <p className='hidden md:block py-6 text-xs sm:text-sm md:text-lg w-3/12 text-white'>{overview}</p>
      <div>
        <button className='bg-white px-2 md:px-12 text-xs md:text-md text-black p-1 md:p-3 rounded-md hover:bg-opacity-50'>
          <span>▶︎ </span>
          <span>Play</span>
        </button>
        <button className='bg-gray-700 px-2 md:px-12 text-xs md:text-md text-white m-2 p-1 md:p-3 rounded-md hover:bg-opacity-50'>
          More Info..
        </button>
      </div>
    </div>
  )
}

export default TrailerTitle
