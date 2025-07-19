import React, { useEffect, useState } from 'react';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

interface Product {
  id: number;
  title: string;
  price: number;
  creationAt: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface Category {
  id: number;
  name: string;
}

const PRODUCTS_API = 'https://api.escuelajs.co/api/v1/products';
const USERS_API = 'https://api.escuelajs.co/api/v1/users';
const CATEGORIES_API = 'https://api.escuelajs.co/api/v1/categories';

export const AdminDashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching admin dashboard data...');
        const [productsRes, usersRes, categoriesRes] = await Promise.all([
          fetch(PRODUCTS_API),
          fetch(USERS_API),
          fetch(CATEGORIES_API),
        ]);
        
        if (!productsRes.ok || !usersRes.ok || !categoriesRes.ok) {
          throw new Error('Failed to fetch data from API');
        }
        
        const productsData = await productsRes.json();
        const usersData = await usersRes.json();
        const categoriesData = await categoriesRes.json();
        
        console.log('Data fetched successfully:', { products: productsData.length, users: usersData.length, categories: categoriesData.length });
        
        setProducts(productsData);
        setUsers(usersData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-100 text-lg">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-400 text-lg">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <img 
              src="/favicon-top-shop.svg" 
              alt="TopShop Logo" 
              className="w-12 h-12"
            />
            <h1 className="text-3xl font-bold text-gray-100">Admin Dashboard</h1>
          </div>
                      {user && (
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-indigo-500 cursor-pointer hover:scale-110 transition-transform duration-200"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/32x32';
                    }}
                    onMouseEnter={() => setShowUserMenu(true)}
                    onMouseLeave={() => setShowUserMenu(false)}
                  />
                  
                  {/* User Menu on Hover */}
                  {showUserMenu && (
                    <div 
                      className="absolute right-0 top-full mt-0 bg-gray-800 rounded-lg shadow-lg border border-gray-700 min-w-48 z-50"
                      onMouseEnter={() => setShowUserMenu(true)}
                      onMouseLeave={() => setShowUserMenu(false)}
                    >
                      {/* User Info */}
                      <div className="p-4 border-b border-gray-700">
                        <div className="flex items-center gap-3">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-8 h-8 rounded-full object-cover"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/32x32';
                            }}
                          />
                          <div>
                            <div className="text-gray-100 font-semibold text-sm">{user.name}</div>
                            <div className="text-gray-400 text-xs">{user.email}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Logout Button */}
                      <div className="p-2">
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-600 hover:text-white transition-colors text-sm rounded"
                        >
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Logout
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-gray-300">{user.name}</span>
              </div>
            )}
        </div>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 text-center text-gray-100 shadow-lg border border-gray-700">
            <div className="text-3xl font-bold text-indigo-400">{products.length}</div>
            <div className="text-gray-400 mt-2">Products</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center text-gray-100 shadow-lg border border-gray-700">
            <div className="text-3xl font-bold text-green-400">{users.length}</div>
            <div className="text-gray-400 mt-2">Users</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center text-gray-100 shadow-lg border border-gray-700">
            <div className="text-3xl font-bold text-purple-400">{categories.length}</div>
            <div className="text-gray-400 mt-2">Categories</div>
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Products */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
            <h2 className="text-xl font-bold text-gray-100 mb-4">Recent Products</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-700">
                    <th className="text-left py-2">Name</th>
                    <th className="text-left py-2">Price</th>
                    <th className="text-left py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {products.slice(0, 5).map((product) => (
                    <tr key={product.id} className="border-b border-gray-700 text-gray-300">
                      <td className="py-2">{product.title}</td>
                      <td className="py-2">${product.price}</td>
                      <td className="py-2">{formatDate(product.creationAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Users */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
            <h2 className="text-xl font-bold text-gray-100 mb-4">Recent Users</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-700">
                    <th className="text-left py-2">Name</th>
                    <th className="text-left py-2">Email</th>
                    <th className="text-left py-2">Avatar</th>
                  </tr>
                </thead>
                <tbody>
                  {users.slice(0, 5).map((user) => (
                    <tr key={user.id} className="border-b border-gray-700 text-gray-300">
                      <td className="py-2">{user.name}</td>
                      <td className="py-2">{user.email}</td>
                      <td className="py-2">
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-8 h-8 rounded-full object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/32x32';
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 