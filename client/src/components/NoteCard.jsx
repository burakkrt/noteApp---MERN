import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

const NoteCard = ({ data }) => {
  if (data) {
    const { _id, title, description, createdAt, updatedAt } = data;
    return (
      <div className="bg-neutral-200 p-5 rounded-md shadow-md">
        <div className="flex flex-row items-center justify-between ps-2 mb-5">
          <h3 className="font-bold">{title}</h3>
          <Link
            to={`edit/${_id}`}
            className="text-red-900 hover:text-neutral-900 duration-150"
            title="Edit this note"
          >
            <CiEdit className="text-2xl" />
          </Link>
        </div>
        <div className="p-2 my-2 min-h-[74px] bg-neutral-300 rounded-md">
          <p>{description}</p>
        </div>
        <div className=" text-neutral-500">
          <span className="text-neutral-500">ID: {_id}</span>
          <div>
            <span>Creation date : </span>
            <span>
              {new Date(createdAt).toLocaleDateString("tr", {
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
              {new Date(updatedAt).toLocaleDateString("tr", {
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
      </div>
    );
  }
};

export default NoteCard;
