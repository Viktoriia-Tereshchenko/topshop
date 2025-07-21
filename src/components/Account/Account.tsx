import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useEffect } from 'react';
import { ROUTES } from '../../constants/routes';
import Container from '../Container/Container';

export default function Account() {
  const { user } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Account component - user:', user);
    if (!user) {
      console.log('No user found, redirecting to login');
      navigate(ROUTES.LOGIN);
    }
  }, [user, navigate]);

  if (!user) {
    console.log('Account component - no user, returning null');
    return null;
  }

  console.log('Account component - rendering with user:', user);

  return (
    <div className="py-[120px]">
      <Container>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-300 dark:border-gray-700">
          <div className="flex items-center justify-center gap-5 space-x-6">
            <img
              className="h-24 w-24 rounded-full object-cover border-2 border-indigo-500"
              src={user.avatar}
              alt={user.name}
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
              <div className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold">User ID:</span> {user.id}
                </p>
              </div>
              <p className="mt-1 text-lg text-gray-500 dark:text-gray-300">{user.email}</p>
              <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-white rounded-full">
                {user.role.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
