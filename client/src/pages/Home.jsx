import { IoMdLogIn } from "react-icons/io";
import { useAuthContext } from "../hooks/useAuthContext";
import { NavItem } from "./Header";
import { FaUserPlus } from "react-icons/fa";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className="text-2xl text-center min-h-[500px] flex flex-col items-center justify-center">
      <p>
        Hello, welcome to my basic level note creation and editing application
        that I created using MERN technologies.
      </p>
      {!user && (
        <>
          <span className="mt-5 block text-red-900">
            Log in or create a new account to get started now.
          </span>
          <ul className="flex flex-row space-x-10 justify-center mt-10">
            <NavItem href="/login" iconElement={<IoMdLogIn />}>
              Login
            </NavItem>
            <NavItem href="/singup" iconElement={<FaUserPlus />}>
              SingUp
            </NavItem>
          </ul>
        </>
      )}
    </div>
  );
}
