import { createSlice } from "@reduxjs/toolkit";

interface Movies {
    moviesArray: {
        id: number,
        name: string,
    }[],
};

const initialState: Movies = {
    moviesArray: [
        {id: 1, name: "Movie1"},
        {id: 2, name: "Movie2"},
    ],
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const lastMovie = state.moviesArray[state.moviesArray.length - 1];
            const newMovie = {id: lastMovie.id + 1, name: action.payload};
            state.moviesArray.push(newMovie);
            console.log(lastMovie);
            console.log(newMovie);
        },
        removeMovie: (state, action) => { 
            state.moviesArray = state.moviesArray.filter((movie) => movie.id !== action.payload);
            console.log(state.moviesArray);
        },
    }
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;