import React from "react";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import instance from "./axiosrequest";
import "./Row.css"
import movieTrailer from "movie-trailer";

const poster_base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchurl,isposter  }) {
  const [movies, setmovies] = useState([]);
  const [trailerurl, settrailerurl] = useState("");

  const handleclick=(movie)=>{
    console.log(movie)
    if (trailerurl){
      settrailerurl("");

    }
    else{
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
      .then((url )=>{
        console.log(url)
        const urlParams= new URLSearchParams(new URL(url).search);
        settrailerurl(urlParams.get("v"))

      })
      .catch((error) => console.log(error));
    }

  }


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
  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    },

  };

  console.log(isposter)

  return (
    <div className="row">
      <h2>{title} </h2>

      <div className="row_posters">
        {/* posters */} 
        {movies.map((movie) => (
          <img className={`row_poster ${isposter && "row_posterlarge"}`}
          onClick={()=>handleclick(movie)}
          key={movie.id}
            src={`${poster_base_url}${isposter ? movie.poster_path: movie.backdrop_path}`}
            // src={poster_base_url + ({isposter} ) }
            alt={movie.name}
            
            
          ></img>
        ))}
      </div>
      {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
    </div>
  );
}

export default Row;
