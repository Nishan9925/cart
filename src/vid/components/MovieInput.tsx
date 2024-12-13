import React, { useState } from 'react'
import { addMovie } from "../movieSlice";
import { useDispatch } from 'react-redux';

function MovieInput() {
    const [newMovie, setNewMovie] = useState<string>("");
    const dispatch = useDispatch();

    const handleNewMovie = () => {
        if (newMovie) {
            dispatch(addMovie(newMovie));
            setNewMovie("");
            console.log(newMovie);
        }
    }


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMovie(e.target.value);
    }

  return (
    <div>
        <div>MovieInput</div>
        <input onChange={(e) => handleOnChange(e) } value={newMovie} />
        <button onClick={() => handleNewMovie()}>Add Movie</button>
    </div>
  )
}

export default MovieInput