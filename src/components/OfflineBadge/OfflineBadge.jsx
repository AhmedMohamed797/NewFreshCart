import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";

export default function OfflineBadge({ children }) {
  const isOnline = useOnlineStatus();

  if (isOnline) return children;
  else
    return (
      <>
        {children}
        <p className="absolute right-8 bottom-8 flex items-center gap-2 rounded-md bg-red-200 px-3 py-2 text-red-500">
          <FontAwesomeIcon icon={faWifi} />
          <span>Check your internet connection</span>
        </p>
      </>
    );
}
