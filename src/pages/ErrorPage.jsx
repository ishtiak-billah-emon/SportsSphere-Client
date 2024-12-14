import { useNavigate } from "react-router-dom";
import error from "../assets/404.gif";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={error} alt="404 Not found" />
      <button
        onClick={() => navigate("/home")}
        className="text-2xl font-thin underline"
      >
        Go back to Home Page
      </button>
    </div>
  );
};

export default ErrorPage;
