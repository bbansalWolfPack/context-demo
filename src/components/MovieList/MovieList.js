import React from "react";
import Movie from "../Movie";
import { useMovieContext } from "../../state/movieContext";

export const MovieList = () => {
  const context = useMovieContext();
  const movies = context.state.movies || [];

  return (
    <div
      style={{
        marginLeft: "50px",
      }}
    >
      {movies.map((movie, index) => (
        <Movie movieName={movie} key={index} />
      ))}
    </div>
  );
};
