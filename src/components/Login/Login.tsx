import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import Container from "../Container/Container";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .matches(/[A-Z]/, "Minimum one capital letter")
    .matches(/[0-9]/, "Minimum one digit")
    .max(50, "Too Long!"),
});

interface Credentials {
  email: string;
  password: string;
}

export const Login = () => {
  const [message, setMessage] = useState("");
  const { isAuthorized, setIsAuthorized } = useCurrentUser();
  const navigate = useNavigate();

  async function fetchLogin(credentials: Credentials) {
    try {
      console.log("Attempting login with:", credentials);

      const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      console.log("Login response status:", res.status);
      console.log("Login response ok:", res.ok);

      if (res.ok) {
        const data = await res.json();
        console.log("Login response data:", data);

        setMessage("Successfully login");

        const { access_token } = data;
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("isAuthorized", "true");
        setIsAuthorized(true);
        navigate(ROUTES.HOME);
      } else {
        const errorData = await res.json();
        console.error("Login error:", errorData);
        setMessage("Login failed: " + (errorData.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed: Network error");
    }
  }
  useEffect(() => {
    if (isAuthorized) {
      navigate(ROUTES.HOME);
    }
  }, [isAuthorized, navigate]);

  return (
    <div className="py-[120px]">
      <Container>
        <div>{message ? message : null}</div>
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            fetchLogin(values);
            console.log(values);
          }}
        >
          {() => (
            <Form className="max-w-md mx-auto space-y-4">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  name="email"
                  type="text"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300  rounded-lg focus:ring-0 focus:ring-blue-500 focus:border-transparent focus:outline-none focus:shadow-none "
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  autoComplete="true"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300  rounded-lg focus:ring-0 focus:ring-blue-500 focus:border-transparent focus:outline-none focus:shadow-none "
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-between items-center gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-accent text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
                >
                  Signin
                </button>
                <a
                  href={ROUTES.REGISTRATION}
                  className="flex-1 text-center bg-gray-100 text-accent px-6 py-2 rounded hover:bg-gray-200"
                >
                  Signup
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Login;
