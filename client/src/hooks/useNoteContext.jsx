import { NotContext } from "../context/NotContext";

import { useContext } from "react";

export const useNotContext = () => {
  const context = useContext(NotContext);

  if (!context) {
    throw new Error("context not loaded.");
  }

  return context;
};
