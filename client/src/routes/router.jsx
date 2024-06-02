import { Link, Outlet, createBrowserRouter } from "react-router-dom";
import HomeContainer from "../containers/RootContainer";
import NotFound404 from "../containers/NotFound404";
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import NoteDetail from "../pages/NoteDetail";
import NoteAdd from "../pages/NoteAdd";
import Login from "../pages/Login";
import Singup from "../pages/Singup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer />,
    errorElement: <NotFound404 />,
    handle: {
      crumb: () => <Link to="/">Homepage</Link>,
    },
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "notes",
        element: <Outlet />,
        handle: {
          crumb: () => <Link to="/notes">Notes</Link>,
        },
        children: [
          {
            index: true,
            element: <Notes />,
          },
          {
            path: "edit/:id",
            element: <NoteDetail />,
            handle: {
              crumb: () => <Link to="/notes">Edit Note</Link>,
            },
          },
          {
            path: "add",
            element: <NoteAdd />,
            handle: {
              crumb: () => <Link to="/notes/add">Add Note</Link>,
            },
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound404 />,
  },
  {
    path: "/singup",
    element: <Singup />,
    errorElement: <NotFound404 />,
  },
]);

export default router;
