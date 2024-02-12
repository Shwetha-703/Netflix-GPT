import React, { useState } from 'react'
import Modal from 'react-modal';
import { TMDB_IMG_URL } from '../utils/constants'
import MovieDetails from './MovieDetails';

const MovieCard = ({movie}) => {
  const poster_path = movie.poster_path;
  const [showMovieDetails, setShowMovieDetails ] = useState(false);

  const toggleMovieOn = ()=>{
    if(!showMovieDetails)
      setShowMovieDetails(true);
  }
  const toggleMovieOff = ()=>{
    setShowMovieDetails(false);
  }
  Modal.setAppElement('#video');
    if(!poster_path)
     return null;
  return (
    <div className='w-28 md:w-36 pr-4 cursor-pointer'>
        
        <img onClick={toggleMovieOn}
          src={TMDB_IMG_URL+poster_path}/>
        
        <Modal isOpen={showMovieDetails} 
              shouldCloseOnOverlayClick={true}
              style={{
                overlay: {
                  backgroundColor: 'black',
                  top: "50px",
                  left: "50px",
                  right: "50px",
                  bottom: "50px",
                  zIndex:"50",
                  width:"60%",
                  height:"auto",
                  justifyContent: "center",
                  
                  margin : "auto"
                },
                content: {
                  color: 'lightsteelblue',
                  background:'black',
                  
                  overflow: 'auto'
                }
              }}
        >
          <div className='bg-black'>
            <button className='fixed bg-black text-white' onClick={toggleMovieOff}>X</button>
            <MovieDetails movie={movie}/>
          </div>
        </Modal>
    </div>
  )
}

export default MovieCard
