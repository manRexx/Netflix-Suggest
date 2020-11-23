import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* background image */}
        {/* title */}
        <div className="banner__emptyHeight__one"></div>
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* buttom play and mylist */}
        {/* <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div> */}

        {/* description */}
        <div className="banner__emptyHeight__two"></div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner__emptyHeight"></div>
      <div className="banner__fadebottom"></div>
    </header>
  );
}

export default Banner;
