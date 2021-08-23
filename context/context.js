import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children, movies }) {
  const [searchMoviess, setSearchMovies] = useState(movies);

  return (
    <AppContext.Provider value={{ searchMoviess, setSearchMovies }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
