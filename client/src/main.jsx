import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/router.jsx";

import { RouterProvider } from "react-router-dom";
import { NotContextProvider } from "./context/NotContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <NotContextProvider>
      <RouterProvider router={router} />
    </NotContextProvider>
  </AuthContextProvider>
);
