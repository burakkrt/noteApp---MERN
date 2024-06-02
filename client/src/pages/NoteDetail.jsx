import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  deleteNotesById,
  getNotesById,
  updateNotesById,
} from "../services/notes";
import Loading from "../components/Loading";

import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useNotContext } from "../hooks/useNoteContext";
import Helmet from "../components/Helmet";
import { useAuthContext } from "../hooks/useAuthContext";

function NoteDetail() {
  const [note, setNote] = useState();
  const [loading, setLoading] = useState(true);
  const [formValues, setFormValues] = useState({ title: "", description: "" });
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useNotContext();
  const { user } = useAuthContext();

  useEffect(() => {
    user &&
      getNotesById(id, user?.token).then((res) => {
        setNote(res);
        setLoading(false);
      });
  }, [id, user]);

  const handleFormChance = (data) => {
    setFormValues({ ...formValues, ...data });
  };

  const handleUpdateNote = (e) => {
    e && e.preventDefault();
    const undefinedValues = Object.values(formValues).every(
      (value) => value === ""
    );

    const alreadyValues = Object.entries(formValues).some(
      ([key, value]) => note[key] === value
    );

    if (undefinedValues) {
      toast.error("To update you need to fill in a field.");
    } else if (alreadyValues) {
      toast.error(
        "The value you enter must be different from the current value."
      );
    } else {
      const newValue = {
        title: formValues.title === "" ? note?.title : formValues.title,
        description:
          formValues.description === ""
            ? note?.description
            : formValues.description,
      };

      toast
        .promise(updateNotesById(note?._id, newValue, user?.token), {
          loading: "Loading",
          success: "The data has been updated successfully.",
          error:
            "An error occurred while updating data, please check console messages.",
        })
        .then((res) => {
          res?.data && setNote(res.data);
          setFormValues({ title: "", description: "" });
        });
    }
  };

  const handleDeleteNote = () => {
    toast
      .promise(
        deleteNotesById(note?._id, user?.token),
        {
          loading: "Loading",
          success:
            "The data has been deleted successfully. You were directed to the previous page.",
          error:
            "An error occurred while deleting data, please check console messages.",
        },
        {
          success: {
            duration: 4000,
          },
        }
      )
      .then((res) => {
        if (res?.data) {
          dispatch({ type: "DELETE_NOTE", payload: res.data });
          navigate("..");
        }
      });
  };

  if (!note && !loading) {
    return (
      <div>
        <span className="text-red-400 text-xl">
          Sorry, no data found! If there is an error, check the console
          messages.
        </span>
      </div>
    );
  }

  return (
    <>
      <Helmet title="Edit Note" />

      {loading && (
        <div className="min-h-[70vh] flex flex-row items-center justify-center">
          <Loading />
        </div>
      )}
      {note && (
        <form onSubmit={handleUpdateNote}>
          <div className="grid grid-cols-3 items-center min-h-[70vh]">
            <div className="col-start-2">
              <div className="bg-neutral-200 p-5 rounded-md shadow-md">
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Title :</span>
                  <input
                    type="text"
                    placeholder={note?.title}
                    value={formValues?.title}
                    onChange={(e) =>
                      handleFormChance({ title: e.target.value })
                    }
                    className=" bg-neutral-300 rounded-md font-bold p-2 grow"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="font-bold">Decription :</span>
                  <textarea
                    type="textarea"
                    rows="3"
                    placeholder={note?.description}
                    value={formValues?.description}
                    onChange={(e) =>
                      handleFormChance({ description: e.target.value })
                    }
                    className="w-full p-2 my-2 bg-neutral-300 rounded-md"
                  />
                </div>
                <div>
                  <span className="text-neutral-500">ID: {note?._id}</span>
                  <div>
                    <span>Creation date : </span>
                    <span>
                      {new Date(note?.createdAt).toLocaleDateString("tr", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </span>
                  </div>
                  <div>
                    <span>Last update : </span>
                    <span>
                      {new Date(note?.updatedAt).toLocaleDateString("tr", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row space-x-4 mt-6 justify-end">
                  <button
                    type="submit"
                    onClick={handleUpdateNote}
                    className="flex flex-row items-center gap-x-1.5  px-4 py-1.5 rounded-lg font-semibold text-white bg-green-700"
                  >
                    <FaCheck className="text-2xl" />
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={handleDeleteNote}
                    className="flex flex-row items-center gap-x-1.5  px-4 py-1.5 rounded-lg font-semibold text-white bg-red-700"
                  >
                    <MdDelete className="text-2xl" />
                    Delete
                  </button>
                  {(formValues?.title || formValues?.description) && (
                    <button
                      type="button"
                      onClick={() =>
                        handleFormChance({ title: "", description: "" })
                      }
                      className="flex flex-row items-center gap-x-1.5  px-4 py-1.5 rounded-lg font-semibold text-white bg-neutral-700"
                    >
                      <MdCancel className="text-2xl" />
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default NoteDetail;
