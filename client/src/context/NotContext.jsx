import { createContext, useReducer } from "react";

export const NotContext = createContext();

export const notReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      return {
        notes: [action.payload, ...state.notes],
      };
    case "FILL_NOTE":
      return {
        notes: action.payload,
      };
    case "DELETE_NOTE":
      return {
        notes: state.notes.filter((note) => note._id !== action.payload.id),
      };
    case "CLEAR_NOTE":
      return {
        notes: null,
      };
    default:
      return state;
  }
};

export const NotContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notReducer, {
    notes: null,
  });

  return (
    <NotContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NotContext.Provider>
  );
};
