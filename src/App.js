import React from "react";
import "./App.css";
import { AddNewMovie, MovieList, Nav } from "./components";
import { MovieContextProvider } from "./state/movieContext";

function App() {
  return (
    <MovieContextProvider>
      <div className="App">
        <Nav />
        <AddNewMovie />
        <MovieList />
      </div>
    </MovieContextProvider>
  );
}

export default App;
