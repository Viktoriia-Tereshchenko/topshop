import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { buttonStyles } from "../../constants/buttonStyles";


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
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const { addToCart, getItemQuantity } = useCart();
  const navigate = useNavigate();

  const { addToCart } = useCart();

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
      setIsInitialLoad(false);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-12 mb-8">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-elegant font-bold text-white mb-4 animate-fade-in">
            Discover Amazing Products
          </h1>
          <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto">
            Explore our curated collection of premium products designed to enhance your lifestyle
          </p>
          
          {/* Search Bar with reduced height */}
          <div className="max-w-md mx-auto">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search for your perfect product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-800 bg-white/95 backdrop-blur-sm border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white shadow-lg transition-all duration-300"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-spin"></div>
      </div>

      {/* Categories with simplified design */}
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            className={`px-3 py-1 rounded-full border transition-all duration-200 ${
              selectedCategory === null
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/30"
                : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md hover:shadow-blue-500/20"
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            <span className="font-elegant font-medium text-sm">All</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-3 py-1 rounded-full border transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/30"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md hover:shadow-blue-500/20"
              }`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="font-elegant font-medium text-sm">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Products Grid with elegant hover effect */}
      {loading ? (
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-xl text-gray-600">Loading amazing products...</p>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group cursor-pointer ${isInitialLoad ? 'animate-fade-in-up' : ''}`}
                style={isInitialLoad ? { animationDelay: `${index * 0.1}s` } : {}}
              >

                <div 
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="bg-white rounded-xl p-4 shadow-md transition-all duration-300 border border-gray-100 group-hover:shadow-xl group-hover:shadow-blue-500/20 overflow-hidden relative h-[380px] flex flex-col cursor-pointer"
                >
                  
                  {/* Product image with enhanced effects */}
                  <div className="relative mb-4 overflow-hidden rounded-lg flex-shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Price badge */}
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-sm font-bold shadow-md">
                      ${product.price}
                    </div>

                    {/* Category badge */}
                    <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {product.category.name}

                    </div>
                  </div>
                  
                  {/* Product info */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="font-elegant font-bold text-base mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="text-gray-600 text-sm mb-3 flex-1 overflow-y-auto" style={{ minHeight: '48px', maxHeight: '64px' }}>
                      {product.description}
                    </div>
                    {/* Action button */}
                    <div className="flex justify-center mt-auto">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            image: product.images[0],
                            category: product.category.name
                          });
                        }}
                        className={`w-2/3 ${buttonStyles.smallSuccess} cursor-pointer py-1 text-sm`}
                      >
                        {getItemQuantity(product.id) > 0 ? `In Cart (${getItemQuantity(product.id)})` : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsPage; 