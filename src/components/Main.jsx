import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests"; //step 9. just using this to indicate which came first. not counting
//we'll be doing a lot here. using axios, usestate, useeffect
const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random()* movies.length)]//step11. get random movie from movies array

  useEffect (()=> { //step10. we use axios to make api calls. we wrap axios in useeffect so it can only make those calls when the page loads. else itll just be making calls all the time
      axios.get(requests.requestPopular).then((response)=> {
        setMovies(response.data.results);
      });
  }, []);
  //console.log(movie)

  const truncateSting = (str, num) => { //step12 shorten movie overviews @34min. GO TO HOME.jsx FOR NEXT STEP ******
    if(str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }

  return (
  <div className="w-full h-[550px] text-white"> {/*step 11 setting h and w of image */} 
    <div className="w-full h-full" >
    <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} /> {/*object-cover makes image croppable to retain aspect ratio*/}
    <div className="absolute w-full top-[20%] p-4 md:p-4">
      <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
      <div className="my-4">
        <button className="border bg-gray-300 text-black border-gray-300 py-z px-5">Play</button>
        <button className="border text-white border-gray-300 py-z px-5 ml-4">Watch Later</button>
      </div>
      <p className="text-gray-400 text-sn">Released: {movie?.release_date}</p>
      <p className="w-full md:max-w-[70%] lg:max-w-[50] xl:max-w-[35%] text-gray-200">{truncateSting(movie?.overview, 220)}</p>
    </div>
    
    </div>
  </div>);
  }
  
export default Main;
