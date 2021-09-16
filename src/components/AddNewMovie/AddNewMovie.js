import React, { useState } from "react";
import { useMovieContext } from "../../state/movieContext";

export const AddNewMovie = () => {
  const context = useMovieContext();
  const { addMovie } = context.actions;

  const [movieName, setMovieName] = useState("");

  const handleChange = (event) => setMovieName(event.target.value);

  const handleSubmit = () => {
    if (movieName) {
      addMovie(movieName);
      setMovieName("");
    } else {
      alert("please enter a movie name");
    }
  };

  return (
    <div
      className="movie-input"
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "100px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        value={movieName}
        onChange={handleChange}
        placeholder="Enter movie name"
      />
      <input type="button" value="Add Movie" onClick={handleSubmit} />
    </div>
  );
};
