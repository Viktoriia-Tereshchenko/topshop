import { useEffect, useState } from "react";
import type { User } from "../../types";
import UserCard from "../UserCard/UserCard";

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(5);

  function updateCardsPerPage() {
    const width = window.innerWidth;
    if (width >= 1280) {
      setCardsPerPage(5);
    } else if (width >= 768) {
      setCardsPerPage(3);
    } else if (width >= 640) {
      setCardsPerPage(2);
    } else {
      setCardsPerPage(1);
    }
  }

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setPage(0);
  }, [cardsPerPage]);

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

  const maxPage = Math.floor((users.length - 1) / cardsPerPage);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, maxPage));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {loading && <p>Loading users...</p>}
      {error && (
        <div className="text-secondary-700 font-semibold p-4">
          Failed to load users: {error}
        </div>
      )}
      {!loading && !error && (
        <>
          <ul className="  flex w-full max-w-screen-xl justify-center items-stretch px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 gap-10">
            {visibleUsers.map((user) => (
              <li
                key={user.id}
                className=" flex-shrink-0 mx-auto max-w-[250px] rounded-[10px] overflow-hidden bg-secondary-100
                shadow-[0px_1px_3px_rgba(0,0,0,0.12),0px_1px_1px_rgba(0,0,0,0.14),0px_2px_1px_rgba(0,0,0,0.2)]
                transform transition-transform duration-300 hover:scale-102
                 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/20"
                style={{ width: `${100 / cardsPerPage}%` }}
              >
                <UserCard user={user} />
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={endIndex >= users.length}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            >
              →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
