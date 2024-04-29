import LoadingLogo from "../../assets/pokeball_gray.png";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={LoadingLogo} alt="loading" className="loading w-10 h-10" />
    </div>
  );
};

export default Loading;
