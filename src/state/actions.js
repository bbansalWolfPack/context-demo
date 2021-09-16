import { ADD_MOVIE_ACTION, REMOVE_MOVIE_ACTION } from "./reducer";

export const addMovieAction = (movieName) => ({
  type: ADD_MOVIE_ACTION,
  data: movieName,
});

export const removeMovieAction = (movieName) => ({
  type: REMOVE_MOVIE_ACTION,
  data: movieName,
});

export const actions = (dispatch) => ({
  addMovie: (movieName) => dispatch(addMovieAction(movieName)),
  removeMovie: (movieName) => dispatch(removeMovieAction(movieName)),
});
