import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import Helmet from "../components/Helmet";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNotContext } from "../hooks/useNoteContext";

export default function HomeContainer() {
  const { user } = useAuthContext();
  const { dispatch } = useNotContext();

  useEffect(() => {
    dispatch({ type: "CLEAR_NOTE" });
  }, [user, dispatch]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Helmet />
      <Header />
      <div className="container flex-auto mx-auto py-2">
        <Breadcrumbs />
        <Outlet />
      </div>
      <Toaster />
      <Footer />
    </div>
  );
}
