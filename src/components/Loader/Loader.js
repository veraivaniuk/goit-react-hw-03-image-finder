import Loader from "react-loader-spinner";

export default function Loaderr() {
  return (
    <Loader
      type="BallTriangle"
      color="#00BFFF"
      height={80}
      width={80} //3 secs
    />
  );
}
