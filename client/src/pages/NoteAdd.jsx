import { useState } from "react";
import { createNote } from "../services/notes";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { useNotContext } from "../hooks/useNoteContext";
import Helmet from "../components/Helmet";
import { useAuthContext } from "../hooks/useAuthContext";

function NoteAdd() {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const { dispatch } = useNotContext();
  const { user } = useAuthContext();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("To create a note, you must first log in.");
      return;
    }

    toast
      .promise(createNote(formValues, user?.token), {
        loading: "Loading",
        success:
          "The data has been created successfully and you are directed to the notes page.",
        error: (err) => err.toString(),
      })
      .then((res) => {
        if (res) {
          dispatch({ type: "CREATE_NOTE", payload: res });
          navigate("/notes");
        }
      });
  };

  const handleFormChance = (data) => {
    setFormValues({ ...formValues, ...data });
  };

  return (
    <div>
      <Helmet title="Create Note" />
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-3 items-center min-h-[70vh]">
          <div className="col-start-2">
            <div className="bg-neutral-200 p-5 rounded-md shadow-md">
              <div className="flex flex-col gap-2">
                <span className="font-bold">Title :</span>
                <input
                  type="text"
                  required
                  value={formValues?.title}
                  onChange={(e) => handleFormChance({ title: e.target.value })}
                  className=" bg-neutral-300 rounded-md font-bold p-2 grow"
                />
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <span className="font-bold">Decription :</span>
                <textarea
                  type="textarea"
                  rows="3"
                  value={formValues?.description}
                  onChange={(e) =>
                    handleFormChance({ description: e.target.value })
                  }
                  className="w-full p-2 my-2 bg-neutral-300 rounded-md"
                />
              </div>
              <div className="flex flex-row space-x-4 mt-6 justify-end">
                <button
                  type="submit"
                  className="flex flex-row items-center gap-x-1.5 px-4 py-1.5 rounded-lg font-semibold text-white bg-green-700"
                >
                  <IoMdAddCircle className="text-2xl" />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NoteAdd;
