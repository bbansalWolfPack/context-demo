import React, { useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { actions } from "./actions";

const MovieContext = React.createContext();

export const MovieContextProvider = (props) => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  const appActions = actions(dispatch);

  const contextValue = {
    state: appState,
    actions: appActions,
  };
  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => React.useContext(MovieContext);
