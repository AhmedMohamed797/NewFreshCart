import {
  faCircleExclamation,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import errorImg from "../../assets/imgs/undraw_feeling-blue_8si6.svg";

export default function ErrorState({
  title = "Oops! Something went wrong",
  message = "We couldn't load this content. Please try again.",
  onRetry,
}) {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-16 text-center">
      <img
        src={errorImg}
        alt="Something went wrong"
        className="w-72 max-w-full"
      />

      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

      <p className="max-w-md text-gray-600">{message}</p>

      <p className="text-primary-700 bg-primary-100 flex items-center gap-2 rounded-lg px-4 py-2 text-sm">
        <FontAwesomeIcon icon={faCircleExclamation} />
        <span>Check your connection and try again</span>
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="btn hover:bg-primary-700 bg-primary-600 flex items-center gap-2 text-white"
        >
          <FontAwesomeIcon icon={faRotateRight} />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
}
