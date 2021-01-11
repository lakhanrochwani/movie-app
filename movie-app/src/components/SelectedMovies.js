import React from "react";
import poster from "../poster.png";

const SelectedMovies = (props) => {
    return (
        <div className='d-flex justify-content-start m-3'>
            {props.selectedMovies.map((movie,index) => (
                <div>
                    <img src={movie.Poster === "N/A"? poster : movie.Poster} alt='movie-title' width="300" height="400"/>
                    <h3 className='center'>{movie.Title}</h3>
                </div>    
            ))}
        </div>
    )
}

export default SelectedMovies;