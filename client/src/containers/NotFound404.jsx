import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";

function NotFound404() {
  return (
    <div className="h-screen w-100 flex flex-col items-center justify-center bg-neutral-100">
      <Helmet title="404 Not Found" />
      <h1 className="text-5xl font-bold uppercase">404 Not Found</h1>
      <p className="text-2xl mt-2">
        The page you were looking for was not found.
      </p>
      <div className="mt-10">
        <Link
          to="/"
          className="text-xl bg-blue-900 pt-2 py-3 px-4 p-0 rounded-lg text-white block hover:bg-blue-800 duration-150"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound404;
