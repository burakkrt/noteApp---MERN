import { Link, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { useAuthContext } from "../hooks/useAuthContext";
import { IoMdLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { useLogout } from "../hooks/useLogoutContext";
import toast from "react-hot-toast";

export function NavItem({ children, iconElement, href }) {
  return (
    <li className="hover:text-neutral-300 duration-150">
      <Link
        to={href}
        className="flex flex-row items-center gap-2 select-none"
        title={children}
      >
        {iconElement}
        {children}
      </Link>
    </li>
  );
}

function Header() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const hanleLogout = () => {
    logout();

    toast.success("Your account has been logged out.", { duration: 1500 });
    navigate("/");
  };

  return (
    <header className="min-h-[74px] bg-neutral-900 flex flex-row items-center py-3">
      <div className="container mx-auto flex flex-row justify-between">
        <nav className="text-white text-lg flex flex-row items-center">
          <ul className="flex flex-row space-x-10">
            <NavItem href="/" iconElement={<IoHomeOutline />}>
              Homepage
            </NavItem>
            {user && (
              <>
                <NavItem href="/notes" iconElement={<MdOutlineStickyNote2 />}>
                  Notes
                </NavItem>
                <NavItem href="/notes/add" iconElement={<IoCreate />}>
                  Create Note
                </NavItem>
              </>
            )}
          </ul>
        </nav>
        <div className="text-white text-lg">
          <ul className="flex flex-row space-x-10">
            {!user ? (
              <>
                <NavItem href="/login" iconElement={<IoMdLogIn />}>
                  Login
                </NavItem>
                <NavItem href="/singup" iconElement={<FaUserPlus />}>
                  SingUp
                </NavItem>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  className="flex flex-row items-center gap-2 text-red-400"
                  onClick={hanleLogout}
                >
                  <IoMdLogIn />
                  Logout
                </button>
                <span className="text-sm font-light text-stone-300">
                  {user?.email}
                </span>
              </div>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
