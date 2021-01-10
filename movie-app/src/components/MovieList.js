import React from "react";
import poster from "../poster.png";

function MovieList(props){
    const SelectMovies = props.selectMovies;
    return (
        <div className='image-container d-flex justify-content-start m-3'>
            {props.movies.map(movie => (
                <div>
                    <img src={movie.Poster === "N/A"? poster : movie.Poster} alt='movie-title' width="300" height="400"/>
                    <h3 className='center'>{movie.Title}</h3>
                    <div onClick={() => props.handleSelect(movie)}
                        className='overlay d-flex align-items-center justify-content-center'>
						<SelectMovies />
					</div>
                </div>    
            ))}
        </div>
    )
}

export default MovieList;