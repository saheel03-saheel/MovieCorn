import {useEffect, useState} from 'react';
import React from "react";
import './app.css';
import SearchIcon from './Search.svg';
import MovieCard from './MovieCard';
//759ce0ec
const APIURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=759ce0ec';
const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies();
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${APIURL}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);
    };
    const handelreload=()=>{
        window.location.reload();
    }
  
    return (
      <div className="app">
        <h1 className='ani' onClick={handelreload}>MovieCorn</h1>
  
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img 
            className='rot'
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
  
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    );
  };
  
  export default App;