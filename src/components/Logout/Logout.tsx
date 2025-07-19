import { useEffect } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { logout } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    // Используем централизованную функцию logout
    logout();
    
    // Немедленно перенаправляем на логин
    navigate(ROUTES.LOGIN);
  }, [logout, navigate]);

  return (
    <div className="text-center mt-10 text-xl font-semibold text-gray-100">
      Successfully logged out! Redirecting to login page...
    </div>
  );
}
