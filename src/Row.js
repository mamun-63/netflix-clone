import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'

const base_url = "http://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {

  const [movies, setMovies] = useState([])

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
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
            // src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name} 
          />
        ))}

      </div>

      
    </div>
  )
  
}

export default Row 
