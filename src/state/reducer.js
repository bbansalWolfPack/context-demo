export const ADD_MOVIE_ACTION = "ADD_MOVIE";

export const REMOVE_MOVIE_ACTION = "REMOVE_MOVIE";

export const initialState = {
  movies: ["Inception", "Harry Potter", "Golmalls"],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_ACTION: {
      return { ...state, movies: [...state.movies, action.data] };
    }

    case REMOVE_MOVIE_ACTION: {
      const updatedMovieList = state.movies.filter(
        (movie) => movie !== action.data
      );
      return { ...state, movies: updatedMovieList };
    }

    default: {
      return state;
    }
  }
};
