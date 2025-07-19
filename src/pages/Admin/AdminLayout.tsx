import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminNav } from '../../components/AdminNav/AdminNav';
import { NavBar } from '../../components/NavBar/NavBar';

export const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <NavBar />
      <div className="p-8 max-w-7xl mx-auto">
        <AdminNav />
        <Outlet />
      </div>
    </div>
  );
}; 