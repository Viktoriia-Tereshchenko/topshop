import { Link } from 'react-router-dom';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
      <img src="/img-404.png" alt="404 error illustration" className="w-screen/2 object-contain mb-8" />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">Looks like you’ve gotten lost.</h1>

      <p className="text-lg text-gray-600 mb-6 text-center max-w-md">But don’t worry, we’ll help you get back.</p>

      <Link
        to="/"
        className="px-6 py-3 bg-accent text-white rounded-lg font-medium shadow-md hover:shadow-lg transition"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
