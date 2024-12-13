import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store";
import { removeMovie } from '../movieSlice';

function MovieList() {
    const movies = useSelector((state: RootState) => 
        state.movies.moviesArray
    );
    const dispatch = useDispatch();

    const handleRemoveMovie = (id:number) => {
        dispatch(removeMovie(id));
    }
  return (
    <div>
        <h1>Movie List</h1>
        {movies.map((movie) => (
            <div key={movie.id}>{movie.name} <button onClick={() => handleRemoveMovie(movie.id)}>Remove The Movie</button></div>
        ))}
    </div>
  )
}

export default MovieList;