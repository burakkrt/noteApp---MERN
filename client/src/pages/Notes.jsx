import { useEffect } from "react";
import Helmet from "../components/Helmet";
import { getNotes } from "../services/notes";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { useNotContext } from "../hooks/useNoteContext";
import { useAuthContext } from "../hooks/useAuthContext";

function Notes() {
  const { notes, dispatch } = useNotContext();
  const { user } = useAuthContext();

  useEffect(() => {
    user &&
      getNotes(user?.token).then((data) =>
        dispatch({ type: "FILL_NOTE", payload: data })
      );
  }, [dispatch, user]);

  return (
    <div>
      <Helmet title="Notes" />
      <Link
        to="add"
        className="flex flex-row items-center gap-1 text-lg bg-slate-100 py-1.5 px-3 w-fit rounded-lg shadow-md mb-5 ms-auto"
      >
        <IoMdAddCircle className="text-xl" />
        Add Note
      </Link>
      <div className="grid grid-cols-3 gap-5">
        {notes &&
          notes.length > 0 &&
          notes.map((note, index) => <NoteCard data={note} key={index} />)}
      </div>
    </div>
  );
}

export default Notes;
