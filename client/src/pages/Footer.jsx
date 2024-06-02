import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="min-h-[74px] bg-neutral-900 flex flex-row items-center py-3">
      <div className="container mx-auto text-white flex flex-row justify-between">
        <p>
          This application has been prepared to learn basic MERN technologies.
        </p>
        <p>
          <Link
            to="https://github.com/burakkrt"
            target="_blank"
            className="flex flex-row items-center gap-1 text-lg"
          >
            <FaGithub size="24px" />
            @burakkrt
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
