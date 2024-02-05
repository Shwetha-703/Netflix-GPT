import React from 'react'
import { useSelector } from 'react-redux';
import { useMainMovie } from '../hooks/useMainMovie';
import { YOUTUBE_LINK, YOUTUBE_LINK_AUTOMUTE } from '../utils/constants';

const TrailerVideo = ({movieId}) => {
  const trailerMovie = useSelector((store)=>store.movies.trailerMovie);
  useMainMovie(movieId);
  
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video'
        src={YOUTUBE_LINK+trailerMovie?.key+YOUTUBE_LINK_AUTOMUTE} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >

      </iframe>
    </div>
  )
}

export default TrailerVideo
