import axios from './axios'
import React, { useEffect, useState } from 'react'
import requests from './requests'
import './Banner.css'

function Banner() {

  const [movie, setMovie] = useState()

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)

      console.log(request.data.results) // will see multiple movies
      
      // need randomly one and set it for Banner 
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length -1)
        ]
      )

    }
    fetchData()
  }, [])

  console.log('Banner Random Movie > ', movie)

  // truncate string(here for description) - shorten by cutting of the top or ends
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }


  return (
    // Background image
    <header className="banner" 
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          http://image.tmdb.org/t/p/original/${movie?.backdrop_path}
        )`,
        backgroundPosition: "center center",
      }}
    >  

     <div className="banner__contents">
      {/* title */}
      {/* div > 2 buttons */}
      {/* description */}

      <h1 className="banner__title">{ movie?.name || movie?.title || movie?.original_name }</h1>
      
      <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>

      <h1 className="banner__description">{ truncate(movie?.overview, 150) }</h1>
     </div>

      {/* just to add some fade after banner description, so declared BEM (Modifier) */}
      <div className="banner--fadeBottom"/>

    </header>
  )
}

export default Banner
