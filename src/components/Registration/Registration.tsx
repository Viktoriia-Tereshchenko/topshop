import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { ROUTES } from "../../constants/routes";
import { roles } from "../../types";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .matches(/[A-Z]/, "Minimum one capital letter")
    .matches(/[0-9]/, "Minimum one digit")
    .max(50, "Too Long!"),
  role: Yup.string().required("Required"),
  avatar: Yup.string()
    .min(2, "Too Short!")
    .max(240, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

interface Credentials {
  name: string;
  email: string;
  role: string;
  password: string;
  avatar: string;
}

export const Registration = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function fetchRegister(credentials: Credentials) {
    const res = await fetch("https://api.escuelajs.co/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(credentials),
    });
    if (res.ok) {
      setMessage(
        "Successfully registered! Wait a second for login page redirection..."
      );
      setTimeout(() => {
        navigate(ROUTES.LOGIN);
      }, 2000);
    }
  }

  return (
    <div className="py-[120px]">
      <div>{message ? message : null}</div>
      <h1 className="text-3xl font-bold mb-6 text-center">Registration</h1>
      <Formik
        initialValues={{
          name: "",
          password: "",
          role: "",
          avatar: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          fetchRegister(values);
          console.log(values);
        }}
      >
        {() => (
          <Form className="max-w-md mx-auto space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Field
                name="name"
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

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
                className="mt-1 block w-full border rounded-md px-3 py-2"
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
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <Field
                as="select"
                name="role"
                id="role"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              >
                <option value="">Select role</option>
                <option value={roles.ADMIN}>{roles.ADMIN}</option>
                <option value={roles.CUSTOMER}>{roles.CUSTOMER}</option>
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Avatar */}
            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              >
                Avatar URL
              </label>
              <Field
                name="avatar"
                type="text"
                className="mt-1 block w-full border rounded-md px-3 py-2"
              />
              <ErrorMessage
                name="avatar"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-between items-center gap-4">
              <a
                href={ROUTES.LOGIN}
                className="flex-1 text-center bg-gray-100 text-accent py-2 rounded-md hover:bg-gray-200"
              >
                Signin
              </a>

              <button
                type="submit"
                className="flex-1 bg-accent text-white py-2 rounded-md hover:bg-indigo-500"
              >
                Signup
              </button>

            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
