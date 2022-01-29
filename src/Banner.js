import React, { useState,useEffect } from 'react';
import requests from './request';
import instance from './axiosrequest';
// import ReactPlayer from 'react-player'
import "./Banner.css"

function Banner() {
    
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

    function truncate(str,n){
      return str?.length>n ? str.substr(0,n-1)+"..." :str;
    }
    
  return (
  <header className='banner' 
  style={{
    backgroundSize:"cover",
    backgroundImage:`url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
    )`
  }}
  >
      <div className='banner_content'>
        <h1 className='banner_title'> 
          {movie?.title || movie?.name || movie?.original_name}
        
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button' >Play</button>
          <button className='banner_button' >My List</button>
        </div>
        <h1 className='banner_description'>
          {truncate(movie?.overview,150)}
        </h1>
      </div>
      <div className='banner--fadeBottom'>
        {/* <h1>hello there</h1> */}
      </div>

  </header>
  );
}

export default Banner;
