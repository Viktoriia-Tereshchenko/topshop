import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { buttonStyles } from '../../constants/buttonStyles';
import { useCurrentUser } from '../../hooks/useCurrentUser';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: { id: number; name: string };
  images: string[];
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, getItemQuantity } = useCart();
  const { isAuthorized } = useCurrentUser();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  // State for hovered image
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const fetchProduct = async () => {
      if (!id) {
        console.log('No ID provided');
        return;
      }
      
      try {
        setLoading(true);
        console.log('Fetching product with ID:', id, 'Type:', typeof id);
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Product data received:', data);
        
        if (data && data.id) {
          setProduct(data);
        } else {
          console.error('Invalid product data:', data);
          setProduct(null);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    // Add the selected quantity to cart
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        category: product.category.name
      });
    }
  };

  const handleBuyNow = () => {
    if (!product) return;
    
    // Add the selected quantity to cart
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        category: product.category.name
      });
    }
    
    // Navigate to checkout
    navigate('/checkout');
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-xl text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Product not found</h3>
          <p className="text-gray-500 mb-4">The product you're looking for doesn't exist</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  // Features parsed from description
  const features = product.description
    .split(/[.;\n]/)
    .map(f => f.trim())
    .filter(Boolean)
    .slice(0, 4);

  return (
    <div className="min-h-screen h-screen bg-gray-50 flex flex-col pt-8 pb-8">
      <div className="flex-1 flex justify-center items-stretch h-full">
        <div className="w-[1500px] h-full flex flex-row bg-white rounded-xl shadow-lg overflow-hidden">
        {/* 1. Thumbnails */}
        <div className="flex flex-col gap-2 w-[40px] h-[460px] mt-[48px] ml-[24px]">
          {product.images.map((img, idx) => (
            <button
              key={idx}
              onMouseEnter={() => { setHoveredImage(idx); setActiveImage(idx); }}
              onMouseLeave={() => setHoveredImage(null)}
              className={`rounded-lg overflow-hidden w-[40px] h-[60px] border-2 transition-all duration-200 cursor-pointer
                ${(hoveredImage ?? activeImage) === idx ? 'border-blue-500' : 'border-gray-200'}`}
              style={{ outline: 'none' }}
            >
              <img src={img} alt={product.title + ' ' + (idx+1)} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        {/* 2. Main Image */}
        <div className="ml-[24px] flex items-center justify-center w-[676px] h-[700px] mt-[48px]">
          <img src={product.images[hoveredImage ?? activeImage]} alt={product.title} className="object-contain w-full h-full rounded-xl shadow transition-all duration-200" />
        </div>
        {/* 3. Info/Description */}
        <div className="ml-[24px] flex flex-col gap-4 w-[414px] h-[587px] mt-[48px]">
          <h1 className="font-elegant font-bold text-gray-900 text-[18px]">{product.title}</h1>
          <div className="text-gray-500 text-[13px] font-elegant">{product.category.name}</div>
          {/* Цена и FREE Returns убраны из центрального столбца */}
          <hr />
          {/* About the item (bullets) */}
          <div>
            <h2 className="font-elegant font-semibold mb-2 text-gray-800">About the item</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-[13px]">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <hr />
          {/* Description (collapsible in future) */}
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-between font-elegant font-semibold mb-2 text-gray-800 focus:outline-none select-none group"
              onClick={() => setIsDescriptionOpen((v) => !v)}
            >
              <span>Description</span>
              <span className={`ml-2 transition-transform duration-200 text-gray-400 group-hover:text-blue-500 ${isDescriptionOpen ? 'rotate-180' : ''}`}
                aria-label={isDescriptionOpen ? 'Collapse' : 'Expand'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${isDescriptionOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-gray-600 text-[13px] leading-relaxed tracking-wide italic text-justify bg-white/60 p-3 rounded shadow-sm">
                {product.description}
              </p>
            </div>
          </div>
          {/* Report an issue */}
          <button className="flex items-center gap-2 text-gray-500 text-[13px] mt-2 hover:text-blue-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414-1.414A9 9 0 105.636 18.364l1.414 1.414A9 9 0 1018.364 5.636z" /></svg>
            Report an issue with this product
          </button>
        </div>
        {/* 4. Sidebar */}
        <div className="ml-[24px] bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col gap-4 w-[243px] h-[419px] mt-[48px]">
          <div className="font-bold text-gray-900 text-[22px]">${product.price}</div>
          <a href="#" className="text-blue-600 text-[13px] underline">FREE Returns</a>
          <div className="text-[13px] text-gray-700">FREE delivery <b>2 - 5 August</b>. Order within <span className="text-green-700 font-semibold">18 hrs 29 mins</span>. <a href="#" className="underline">Details</a></div>
          <div className="flex items-center gap-2 text-gray-700 text-[13px]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Delivering to Hamburg 22359 – <a href="#" className="underline">Update location</a>
          </div>
          <div className="text-yellow-700 font-semibold">Only 1 left</div>
          <button
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-elegant font-medium py-1 rounded shadow hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            onClick={handleAddToCart}
          >
            <svg className="w-4 h-4 transform scale-x-[-1]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            Add to bag
          </button>
          {isAuthorized && (
            <>
              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-elegant font-medium py-1 rounded shadow hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                onClick={handleBuyNow}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Buy Now
              </button>
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-elegant font-medium py-1 rounded shadow hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                onClick={() => navigate('/products')}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Continue Shopping
              </button>
            </>
          )}
          <div className="text-[13px] text-gray-500 mt-2">Dispatched from and sold by <a href="#" className="underline">TopShop</a>. For further information, company details, terms and conditions, and cancellation rights, please click on the seller's name.</div>
          <button
            className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-elegant font-medium py-1 rounded shadow-sm hover:shadow-md transition-all duration-200 text-[13px] flex items-center justify-center gap-2"
            onClick={() => alert('Added to wishlist!')}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            Add to List
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 