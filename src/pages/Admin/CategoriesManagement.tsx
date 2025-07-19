import React, { useEffect, useState } from 'react';

interface Category {
  id: number;
  name: string;
  image: string;
}

const CATEGORIES_API = 'https://api.escuelajs.co/api/v1/categories';

export const CategoriesManagement = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    image: ''
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(CATEGORIES_API);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(CATEGORIES_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          image: formData.image
        })
      });

      if (response.ok) {
        const newCategory = await response.json();
        setCategories([newCategory, ...categories]);
        setShowAddForm(false);
        resetForm();
        alert('Category added successfully!');
      }
    } catch (error) {
      console.error('Error adding category:', error);
      alert('Error adding category');
    }
  };

  const handleEditCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCategory) return;

    try {
      const response = await fetch(`${CATEGORIES_API}/${editingCategory.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          image: formData.image
        })
      });

      if (response.ok) {
        const updatedCategory = await response.json();
        setCategories(categories.map(c => c.id === editingCategory.id ? updatedCategory : c));
        setEditingCategory(null);
        resetForm();
        alert('Category updated successfully!');
      }
    } catch (error) {
      console.error('Error updating category:', error);
      alert('Error updating category');
    }
  };

  const handleDeleteCategory = async (categoryId: number) => {
    if (!confirm('Are you sure you want to delete this category?')) return;

    try {
      const response = await fetch(`${CATEGORIES_API}/${categoryId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setCategories(categories.filter(c => c.id !== categoryId));
        alert('Category deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting category:', error);
      alert('Error deleting category');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      image: ''
    });
  };

  const startEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      image: category.image
    });
  };

  const cancelEdit = () => {
    setEditingCategory(null);
    resetForm();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-100 text-lg">Loading categories...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-100">Categories Management</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add New Category
        </button>
      </div>

      {/* Search Filter */}
      <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
        <div>
          <label className="block text-gray-300 mb-2">Search Categories</label>
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Add/Edit Form */}
      {(showAddForm || editingCategory) && (
        <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
          <h2 className="text-xl font-bold text-gray-100 mb-4">
            {editingCategory ? 'Edit Category' : 'Add New Category'}
          </h2>
          <form onSubmit={editingCategory ? handleEditCategory : handleAddCategory}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {editingCategory ? 'Update Category' : 'Add Category'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  cancelEdit();
                }}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <div key={category.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:bg-gray-700/50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-100">{category.name}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(category)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-sm transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-sm transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="aspect-square mb-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/300x300';
                }}
              />
            </div>
            <div className="text-gray-400 text-sm">
              ID: {category.id}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-gray-400 text-sm">
        Showing {filteredCategories.length} of {categories.length} categories
      </div>
    </div>
  );
}; 