import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerMovie } from "../utils/movieSlice";


export const useMainMovie = (movieId)=>{

  const dispatch = useDispatch();

  const getTrailerMovie = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos", API_OPTIONS);
    const json = await data.json();
    const trailerData =  json.results.filter((v)=>v.type==="Trailer");
    const trailer = trailerData.length ? trailerData[0] : json.results[0];
    dispatch(addTrailerMovie(trailer));
  }
  
  useEffect(()=>{
    getTrailerMovie();
  },[]);
}