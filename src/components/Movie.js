import React from "react";
import { useMovieContext } from "../state/movieContext";

const Movie = ({ movieName }) => {
  const context = useMovieContext();
  const { removeMovie } = context.actions;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <h3 style={{ minwidth: "500px" }}>{movieName}</h3>
      <input
        style={{ minWidth: "200px" }}
        type="button"
        value="Remove"
        onClick={() => removeMovie(movieName)}
      />
    </div>
  );
};

export default Movie;
