import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";


export const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movies.popularMovies);

    const getMovies = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
        !popularMovies && getMovies()
    },[]);
}