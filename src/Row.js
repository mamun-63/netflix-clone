import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from "movie-trailer"

const base_url = "http://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {

  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  // A snippet of code which runs based on a specific condition
  useEffect(() => {
    // if [], run once the row/ components load and dont run again
    // if [movies], here we add dependencied, means every time movies changes, it refires the code 
    async function fetchData () {
      const request = await axios.get(fetchUrl)
      // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
      
      console.log(request) // to see the data structure we are getting back
      // console.log(request.data.results) 

      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  console.log(movies) 

  // youtube options
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }

  // whenever click on image, get the id and set it to trailerUrl
  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=g59rUQbVlIw
          // we need this id, g59rUQbVlIw

          const urlParams = new URLSearchParams(new URL(url).search) // ?v=g59rUQbVlIw
          setTrailerUrl(urlParams.get('v'))  // g59rUQbVlIw
        })
        .catch((error) => console.log(error))
    }
  }


  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* constainer -> posters */}
      <div className="row__posters">
        {/* several row poster(s) */}
        
        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
            // src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}   
          />
        ))}

      </div>
        {/* you can put any youtube id to play song on the page */}
        {/* <Youtube videoId="tUUElxEGo0U" opts={opts} />  */}

        {trailerUrl && <Youtube videoId={trailerUrl}f opts={opts} /> 
      }
    </div>
  )
  
}

export default Row 
