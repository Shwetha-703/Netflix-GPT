import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    
  return (
    <div className='px-6'>
        <h1 className='text-xl text-white py-5'>
            {title}
        </h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
            {movies?.map(m => (<MovieCard key={m.id} poster_path={m.poster_path}/>))}
            </div>
        </div>
    </div>
  )
}

export default MovieList
