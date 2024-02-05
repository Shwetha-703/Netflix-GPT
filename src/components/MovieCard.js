import React from 'react'
import { TMDB_IMG_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
    if(!poster_path)
     return null;
  return (
    <div className='w-36 pr-4'>
      <img src={TMDB_IMG_URL+poster_path}/>
    </div>
  )
}

export default MovieCard
