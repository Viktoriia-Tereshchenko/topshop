import { useEffect } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { setIsAuthorized } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthorized(false);
          setTimeout(() => {
            navigate(ROUTES.LOGIN);
          }, 2000);
  }, []);

  return (
    <div className="text-center mt-10 text-xl font-semibold text-gray-700">
      Successfully logout! Wait a second for login page redirection...
    </div>
  );
}
