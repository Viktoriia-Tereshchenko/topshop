import React, { useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';
import Container from '../../components/Container/Container';

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

const PRODUCTS_API = 'https://api.escuelajs.co/api/v1/products';
const CATEGORIES_API = 'https://api.escuelajs.co/api/v1/categories';

// const DESCRIPTION_PREVIEW_LENGTH = 120;
// const DESCRIPTION_PREVIEW_LINES = 3;

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [productsRes, categoriesRes] = await Promise.all([fetch(PRODUCTS_API), fetch(CATEGORIES_API)]);
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
    const matchesSearch =
      searchQuery === '' ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Container>
      <div className="px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            className={`px-4 py-2 rounded-full border transition-all ${
              selectedCategory === null
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full border transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        {loading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map((product) => {
              const isHovered = hoveredId === product.id;
              const isExpanded = expandedId === product.id;
              const desc = product.description || 'No description';
              const isLong = desc.length > 120;
              return (
                <div
                  key={product.id}
                  className="relative"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Обычная карточка */}
                  <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform border border-gray-100 z-0">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-32 h-32 object-cover rounded mb-3 shadow"
                    />
                    <div
                      className="font-bold text-base mb-1 text-center w-full overflow-hidden"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        minHeight: '2.5rem',
                        whiteSpace: 'normal',
                        wordBreak: 'break-word',
                      }}
                    >
                      {product.title}
                    </div>
                    <div className="flex w-full items-center justify-between mb-1">
                      <div className="text-blue-600 font-bold text-xl">${product.price}</div>
                      {/* add to cart */}
                      <button type="button" className="hover:cursor-pointer" onClick={() => addToCart(product)}>
                        🛒
                      </button>
                      <div className="text-gray-500 text-sm">{product.category.name}</div>
                    </div>
                  </div>
                  {/* Всплывающая увеличенная карточка */}
                  {isHovered && (
                    <div
                      className={`absolute left-1/2 top-0 z-30 w-full bg-white rounded-xl shadow-2xl flex flex-col items-center transition-transform duration-200`}
                      style={{
                        transform: `translateX(-50%) scale(1.2)`,
                        padding: '12px',
                        minWidth: '220px',
                        maxWidth: '340px',
                        minHeight: isExpanded ? '420px' : '320px',
                        maxHeight: isExpanded ? '600px' : '340px',
                        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                        boxSizing: 'border-box',
                      }}
                    >
                      <button
                        className="absolute top-2 right-2 text-gray-400 hover:text-blue-600 text-xl font-bold"
                        onClick={() => setHoveredId(null)}
                        tabIndex={-1}
                        aria-label="Close"
                        style={{ zIndex: 2 }}
                      >
                        ×
                      </button>
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-36 h-36 object-cover rounded mb-2 shadow"
                      />
                      <div
                        className="font-bold text-base mb-1 text-center w-full overflow-hidden"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          minHeight: '2.5rem',
                          whiteSpace: 'normal',
                          wordBreak: 'break-word',
                        }}
                      >
                        {product.title}
                      </div>
                      <div className="flex w-full items-center justify-between mb-1">
                        <div className="text-blue-600 font-bold text-xl">${product.price}</div>
                        {/* add to cart */}
                        <button type="button" className="hover:cursor-pointer" onClick={() => addToCart(product)}>
                          🛒
                        </button>
                        <div className="text-gray-500 text-sm">{product.category.name}</div>
                      </div>
                      <div
                        className={`text-gray-700 text-sm text-center w-full ${isExpanded ? 'overflow-y-auto' : ''}`}
                        style={
                          !isExpanded
                            ? {
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                minHeight: '3.5rem',
                              }
                            : { minHeight: '3.5rem' }
                        }
                      >
                        {desc}
                      </div>
                      {!isExpanded && isLong && (
                        <button
                          className="text-blue-600 underline text-xs mt-1"
                          onClick={() => setExpandedId(product.id)}
                        >
                          View more
                        </button>
                      )}
                      {isExpanded && isLong && (
                        <button className="text-blue-600 underline text-xs mt-1" onClick={() => setExpandedId(null)}>
                          Hide
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProductsPage;
