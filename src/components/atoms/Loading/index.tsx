import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <RotatingLines
      strokeColor="white"
      strokeWidth="1"
      animationDuration="0.75"
      width="30"
      visible={true}
    />
  );
};

export default Loader;
