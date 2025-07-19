import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .matches(/[A-Z]/, 'Minimum one capital letter')
    .matches(/[0-9]/, 'Minimum one digit')
    .max(50, 'Too Long!'),
});

interface Credentials {
  email: string;
  password: string;
}

export const Login = () => {
  const [message, setMessage] = useState('');
  const { isAuthorized, setIsAuthorized } = useCurrentUser();
  const navigate = useNavigate();

  async function fetchLogin(credentials: Credentials) {
    const res = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(credentials),
    });

    if (res.ok) {
      setMessage('Successfully login');

      const { access_token } = await res.json();
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('isAuthorized', 'true');
      setIsAuthorized(true);
      setTimeout(() => {
        navigate(ROUTES.HOME);
      }, 2000); // редирект
    }
  }
  useEffect(() => {
    if (isAuthorized) {
      navigate(ROUTES.ACCOUNT);
    }
  }, []);

  return (
    <div className="py-[120px]">
      <div>{message ? message : null}</div>
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field name="email" type="text" className="mt-1 block w-full border rounded-md px-3 py-2" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Field name="password" type="password" autoComplete="true" className="mt-1 block w-full border rounded-md px-3 py-2" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Submit */}
            <div className="flex justify-between items-center gap-4">
              <button type="submit" className="flex-1 bg-accent text-white py-2 rounded-md hover:bg-indigo-500">
                Signin
              </button>
              <a
                href={ROUTES.REGISTRATION}
                className="flex-1 text-center bg-gray-100 text-accent py-2 rounded-md hover:bg-gray-200"
              >
                Signup
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
