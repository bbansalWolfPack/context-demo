import React from "react";
import { useMovieContext } from "../state/movieContext";

export const Nav = () => {
  const context = useMovieContext();
  const moviesList = context.state.movies;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "green",
      }}
    >
      <p> Movie List</p>
      <p> Number of Movies: {moviesList.length || 0} </p>
    </div>
  );
};
