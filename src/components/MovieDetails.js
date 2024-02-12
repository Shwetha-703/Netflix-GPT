import React from 'react'
import { TMDB_IMG_URL } from '../utils/constants';

const MovieDetails = ({movie}) => {
    
    const poster_path = movie.poster_path;
  return (
    <div className='flex justify-center bg-black m-auto'>
      <img className='' src={TMDB_IMG_URL+poster_path}/>
      <div className=''>
        <h1 className='p-4 text-2xl font-semibold'>{movie.title}</h1>
        <h2 className='p-4 text-xs md:text-md'>{movie.overview}</h2>
        <h2 className='p-4 text-xs md:text-md'>Release date : {movie.release_date}</h2>

      </div>
    </div>
  )
}

export default MovieDetails
