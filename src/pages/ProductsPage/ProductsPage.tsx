import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: { id: number; name: string };
  images: string[];
  description: string;
}

interface Category {
  id: number;
  name: string;
}

const PRODUCTS_API = "https://api.escuelajs.co/api/v1/products";
const CATEGORIES_API = "https://api.escuelajs.co/api/v1/categories";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [productsRes, categoriesRes] = await Promise.all([
        fetch(PRODUCTS_API),
        fetch(CATEGORIES_API),
      ]);
      const productsData = await productsRes.json();
      const categoriesData = await categoriesRes.json();
      setProducts(productsData);
      setCategories(categoriesData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.category.id === selectedCategory : true;
    const matchesSearch = searchQuery === "" || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="px-8 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-main">Products</h1>
      
      {/* Search Bar */}
      <div className="mb-6">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 pr-4 text-main bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          className={`px-4 py-2 rounded-full border transition-all duration-200 ${
            selectedCategory === null
              ? "bg-accent text-white border-accent shadow-lg"
              : "bg-white text-accent border-accent hover:bg-accent/10 hover:shadow-md"
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All categories
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded-full border transition-all duration-200 ${
              selectedCategory === cat.id
                ? "bg-accent text-white border-accent shadow-lg"
                : "bg-white text-accent border-accent hover:bg-accent/10 hover:shadow-md"
            }`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      
      {/* Products Grid */}
      {loading ? (
        <div className="text-center text-lg text-main">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1 border border-gray-100 group-hover:border-accent/30">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-32 h-32 object-cover rounded-lg mb-3 shadow-sm group-hover:shadow-lg transition-all duration-300"
                />
                <div className="font-bold text-base mb-1 text-center w-full overflow-hidden text-main" 
                     style={{ 
                       display: '-webkit-box', 
                       WebkitLineClamp: 2, 
                       WebkitBoxOrient: 'vertical', 
                       minHeight: '2.5rem', 
                       whiteSpace: 'normal', 
                       wordBreak: 'break-word' 
                     }}>
                  {product.title}
                </div>
                <div className="flex w-full items-center justify-between mb-1">
                  <div className="text-accent font-bold text-xl">${product.price}</div>
                  <div className="text-gray-500 text-sm">{product.category.name}</div>
                </div>
                <div className="text-gray-600 text-sm text-center w-full overflow-hidden" 
                     style={{ 
                       display: '-webkit-box', 
                       WebkitLineClamp: 2, 
                       WebkitBoxOrient: 'vertical', 
                       minHeight: '2rem' 
                     }}>
                  {product.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage; 