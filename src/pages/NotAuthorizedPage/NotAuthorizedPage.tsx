import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import { ROUTES } from "../../constants/routes";
import notAuth from "../../assets/not-auth.png";

export default function NotAuthorizedPage() {
  return (
    <div className="py-[120px] bg-[#f5f4fa]">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-md max-w-md w-full text-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              You are not authorized
            </h1>
            <img src={notAuth} alt="not-auth" />
            <p className="text-gray-600 mb-6">
              You need to log in to continue to checkout 🛒
            </p>
            <Link
              to={ROUTES.LOGIN}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
