import { useState } from "react";
import { API_URL } from "../constant/index";

// import { useAuthContext } from "./useAuthContext";

export const useSingup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // const { dispatch } = useAuthContext();

  const singup = async (email, password) => {
    setLoading(true);
    setError(null);
    const response = await fetch(`${API_URL}/api/user/singup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.message);
      setLoading(false);
    } else {
      // localStorage.setItem("user", JSON.stringify(json));
      // dispatch({ type: "LOGIN", payload: json });
      setLoading(false);
      return true;
    }
  };

  return { singup, loading, error };
};
