import React from 'react';
import './App.css'
import requests from './requests';
import Row from './Row'
import Banner from './Banner'

function App() {
  return (
    <div className="app">

      {/* Nav */}

      {/* Banner */}
      <Banner />

      {/* just passing properties to reuse the one Row Component, thats the power of React  */}
      <Row 
        title="Netflix Originals" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow  // differenciating the rows just changing the properties to the others
      /> 
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App


