import React from "react";
import navStyles from "../styles/Nav.module.css";
import { useAppContext, AppWrapper } from "../context/context";

export default function Nav() {
  const handleChange = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    if (searchTerm) {
      const movies = await fetch(
        `https://api.themoviedb.org/3/search/movie?&api_key=af183e2660d4b07b6f357fdc745bf737&query=${searchTerm}`
      );
      const filteredMovies = await movies.json();
    }
  };
  return (
    <>
      <div className={navStyles.nav}>
        <ul>
          <li>
            <h3 className={navStyles.text}>moviesDB</h3>
          </li>

          <li>
            <input
              type="text"
              placeholder="Search"
              className={navStyles.search}
              onChange={handleChange}
            ></input>
          </li>
        </ul>
      </div>
    </>
  );
}
