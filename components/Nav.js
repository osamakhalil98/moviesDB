import React from "react";
import { useState } from "react";
import { useContext } from "react";
import navStyles from "../styles/Nav.module.css";

function Nav({ searchedMovies }) {
  const [searchMovies, setSearchMovies] = useState({});

  const handleChange = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    if (searchTerm.length > 0) {
      const movies = await fetch(
        `https://api.themoviedb.org/3/search/movie?&api_key=af183e2660d4b07b6f357fdc745bf737&query=${searchTerm}`
      );
      const filteredMovies = await movies.json();
      setSearchMovies(filteredMovies);
      searchedMovies(filteredMovies);
    } else {
      setSearchMovies({});
      searchedMovies({});
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

export default Nav;
