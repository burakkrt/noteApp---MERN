import { Helmet as ReactHelmet } from "react-helmet";

function Helmet({ title }) {
  return (
    <ReactHelmet>
      <title>{`NoteAPP - ${title ?? "Mern Base"}`}</title>
      <meta
        name="description"
        content="NoteAPP - Mern Base basic application."
      />
    </ReactHelmet>
  );
}

export default Helmet;
