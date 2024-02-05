import React from 'react'

const TrailerTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] px-24 absolute bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold text-white'>{title}</h1>
      <p className='py-6 text-lg w-3/12 text-white'>{overview}</p>
      <div>
        <button className='bg-white px-12 text-black p-3 rounded-md hover:bg-opacity-50'>
          <span>▶︎ </span>
          <span>Play</span>
        </button>
        <button className='bg-gray-700 px-12 text-white m-2 p-3 rounded-md hover:bg-opacity-50'>
          More Info..
        </button>
      </div>
    </div>
  )
}

export default TrailerTitle
