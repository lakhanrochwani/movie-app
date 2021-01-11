import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import MovieList from './components/MovieList';
import SelectMovies from './components/SelectMovies';
import SelectedMovies from './components/SelectedMovies';
import ConfirmMovies from './components/ConfirmMovies';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [title,setTitle]= useState('');
  const [selectedMovies,setSelectedMovies] = useState([]);

  function getData(e){
    e.preventDefault();
    axios
    .get(`http://www.omdbapi.com/?s=${title}&apikey=c6f134cc`)
    .then(response => {
      console.log(response);
      return response.data.Search
    })
    .then(data => {
      if(data.length > 0){
        console.log('Movies',movies);
      setMovies(data)}});  
  }

  const handleChange = (e) => {
      setTitle(e.target.value);
  }

  const handleConfirm = () => {
    setConfirm(true);
  }

  const selectMovie = (movie) => {
    const newSelectedMovies = [...selectedMovies,movie];
    setSelectedMovies(newSelectedMovies);
    console.log('SELECTED MOVIES',selectedMovies)
  }
  return (
    <div>
      <h1 className='center'>Movies</h1>
        <form>
          <div className="form-row">
            <div className="col-md-8">
              <input className="form-control form-control-lg " type='text' placeholder="Search movies..." value={title} onChange={handleChange}/>
            </div>
            <div className="col-md-4">
              <button className="btn btn-outline-primary btn-lg btn-block" onClick={getData}>Search</button>
            </div>
          </div>
        </form>
        <div className='row'>
          <MovieList movies={movies} handleSelect={selectMovie} selectMovies={SelectMovies}/>
        </div>
        <h1 className='center'>Selected Movies</h1>
        <div className='row'>
          {selectedMovies.length > 0 ? 
            <SelectedMovies selectedMovies={selectedMovies}/> :
            <h2 className='center'>---No movies selected---</h2>
          }
          {selectedMovies.length > 0 &&(
            
           <ConfirmMovies selectedMovies={selectedMovies}/>
          
          )
          }
          
        </div>
    </div>
  );
}

export default App;
