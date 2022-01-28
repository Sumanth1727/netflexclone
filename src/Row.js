import React from "react";
import { useState, useEffect } from "react";
import instance from "./axiosrequest";
import "./Row.css"

const poster_base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchurl,isposter  }) {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const request = await instance.get(fetchurl);
      setmovies(request.data.results);
      // console.log(request);
      // console.log(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchurl]);

  // {isposter} ? movie.poster_path: movie.backdrop_path

  console.log(isposter)

  return (
    <div className="row">
      <h2>{title} </h2>

      <div className="row_posters">
        {/* posters */} 
        {movies.map((movie) => (
          <img className={`row_poster ${isposter && "row_posterlarge"}`}
          key={movie.id}
            src={`${poster_base_url}${isposter ? movie.poster_path: movie.backdrop_path}`}
            // src={poster_base_url + ({isposter} ) }
            alt={movie.name}
            
            
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
