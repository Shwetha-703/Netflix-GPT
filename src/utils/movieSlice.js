import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayingMovies : null,
        trailerMovie : null
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },

        addUpcomingMovies:(state, action)=>{
            state.upComingMovies = action.payload;
        },

        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload;
        },

        addTrailerMovie: (state, action)=>{
            state.trailerMovie = action.payload;
        } 
    }
});

export const {addNowPlayingMovies, addTrailerMovie, addPopularMovies, addUpcomingMovies, addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;