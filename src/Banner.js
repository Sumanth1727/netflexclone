import React, { useState,useEffect } from 'react';
import requests from './request';
import instance from './axiosrequest';
// import ReactPlayer from 'react-player'
import "./Banner.css"

function Banner() {
    const poster_base_url = "https://image.tmdb.org/t/p/original/";
    const [movie,setmovie]=useState([]);
    useEffect(() => {
      async function fetchdata(){
       const request= await instance.get(requests.fetchTrending);
       setmovie(request.data.results[
        Math.floor(Math.random()*request.data.results.length-1)   
       ] );
       return request;

      };
     
      fetchdata();
    }, []);
    console.log(movie)
    
  return (
  <header className='banner' 
  style={{
    backgroundSize:"cover",
    backgroundImage:`url(
        "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
    )`

  }}
  >
      <div className='banner_content'>

      </div>
      {/* title */}
      {/* div-> 2 buttons */}
      {/* despriction */}


  </header>
  );
}

export default Banner;
