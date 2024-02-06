import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";


export const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);

    const getMovies = async()=>{
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
  
    useEffect(()=>{
      !nowPlayingMovies && getMovies();
    }, []);
}
