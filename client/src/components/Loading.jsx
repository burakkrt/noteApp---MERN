import ReactLoading from "react-loading";

function Loading({
  type = "balls",
  color = "#EE4E4E",
  width = 114,
  height = 114,
}) {
  return (
    <ReactLoading type={type} color={color} height={height} width={width} />
  );
}

export default Loading;
