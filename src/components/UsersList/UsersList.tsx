import { useEffect, useState } from "react";
import type { User } from "../../types";
import UserCard from "../UserCard/UserCard";

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(0);

  const cardsPerPage = 4;

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

  const startIndex = page * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleUsers = users.slice(startIndex, endIndex);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    const maxPage = Math.floor((users.length - 1) / cardsPerPage);
    setPage((prev) => Math.min(prev + 1, maxPage));
  };

  return (
    <div className="bg-[#f5f4fa] min-h-[400px] flex flex-col items-center p-4">
      {loading && <p>Loading users...</p>}
      {error && (
        <div className="text-red-600 font-semibold p-4">
          Failed to load users: {error}
        </div>
      )}
      {!loading && !error && (
        <>
          <ul className="flex gap-6">
            {visibleUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </ul>
          <div className="mt-4 flex gap-4">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className={`px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50`}
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={endIndex >= users.length}
              className={`px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50`}
            >
              →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
