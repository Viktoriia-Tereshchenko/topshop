import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import type { User } from "../../types";

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/users");

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setUsers(data);
      setError(null);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
        setUsers([]);
      } else {
        setError("Something went wrong...");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-2 gap-4">
      {loading && <p>Loading users...</p>}

      {error && (
        <div className="text-red-600 font-semibold p-4">
          Failed to load users: {error}
        </div>
      )}

      {!loading && !error && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  p-4 gap-4 rounded-lg w-4/5 bg-white border border-t-0 border-[#eeeeee] px-6 py-5 overflow-y-auto max-h-120">
          {users.map((user) => (
            <li
              key={user.id}
              className="h-24 flex flex-col items-center justify-center col-span-1"
            >
              <p className="text-sm mb-2 text-[#2196f3]">{user.email}</p>
              <Link to={`/users/${user.id}`}>
                <img
                  src={user.avatar}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = avatar;
                  }}
                  alt="user avatar"
                  className="rounded-full w-16 h-16 object-cover"
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
