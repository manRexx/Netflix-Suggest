import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      {/* navBar */}
      <Nav />
      {/* Banner */}
      <Banner />
      <Row
        title="NETFLIX Originals"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow
        isBroad
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
        isBroad
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
        isBroad
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
        isBroad
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
        isBroad
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
        isBroad
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
        isBroad
      />
      <Footer />
    </div>
  );
}

export default App;
