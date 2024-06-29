import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Helmet from "../components/Helmet";
import { useSingup } from "../hooks/useSingup";

function Singup() {
  const [formValues, setFormValues] = useState({
    email: "",
    passwordFirst: "",
    passwordSecond: "",
  });
  const { singup, loading, error } = useSingup();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const hanleFormSubmit = async (e) => {
    e.preventDefault();

    if (formValues.passwordFirst !== formValues.passwordSecond) {
      toast.error("The entered passwords do not match each other.");
      setFormValues((prev) => ({
        ...prev,
        passwordFirst: "",
        passwordSecond: "",
      }));
    } else {
      const res = await singup(formValues.email, formValues.passwordFirst);

      if (res) {
        toast.success("Singup successful.", { duration: 1000 });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Toaster />
      <Helmet title="Singup" />

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src="/logo-note.svg" alt="logo" />
          NoteAPP
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={hanleFormSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  minLength={8}
                  maxLength={24}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={formValues.passwordFirst}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      passwordFirst: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  minLength={8}
                  maxLength={24}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={formValues.passwordSecond}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      passwordSecond: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-500 dark:text-gray-300">
                    I accept the Terms and Conditions
                  </label>
                </div>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="w-full text-white bg-slate-700 hover:bg-slate-600 duration-150 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                {loading ? "Loading..." : "Create an account"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="m-2 mt-5 text-center text-slate-500">
          <p>
            TR: Bu uygulamada ücretsiz web servisi kullandığı için servis
            iletişimleri yavaş olabilir, eğer bir loading işleminde uzun süre
            bekliyorsanız lütfen bunu bir hata sanmayın.
          </p>
          <p>
            EN: Since this application uses a free web service, the service
            communications can be slow, if a loading process takes a long time
            If you are waiting, please do not consider this a mistake.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Singup;
