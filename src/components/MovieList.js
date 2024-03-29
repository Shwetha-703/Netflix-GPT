import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    
  return (
    <div className='px-4 md:px-6'>
        <h1 className='text-sm md:text-xl text-white py-5'>
            {title}
        </h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
            {movies?.map(m => (<MovieCard key={m.id} movie={m}/>))}
            </div>
        </div>
        
    </div>
  )
}

export default MovieList
