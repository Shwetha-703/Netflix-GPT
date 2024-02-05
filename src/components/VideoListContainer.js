import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const VideoListContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies && (<div className='bg-black'>
        <div className=' -mt-52 relative z-20'>
            <MovieList title={"Now Playing movies"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Upcoming movies"} movies={movies.upComingMovies}/>
            <MovieList title={"Popular movies"} movies={movies.popularMovies}/>
            <MovieList title={"Top-rated movies"} movies={movies.topRatedMovies}/>
        </div>
    </div>
    )
  )
}

export default VideoListContainer
