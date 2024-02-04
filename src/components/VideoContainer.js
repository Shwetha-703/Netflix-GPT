import React from 'react'
import { useSelector } from 'react-redux';
import { addMainMovie } from '../utils/movieSlice';
import TrailerTitle from './TrailerTitle'
import TrailerVideo from './TrailerVideo'

const VideoContainer = () => {
    const movies =  useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const {original_title, overview, id} = movies[0];

    return (
        <div>
        <TrailerTitle title={original_title} overview={overview}/>
        <TrailerVideo movieId={id}/>
        </div>
    )
}

export default VideoContainer
