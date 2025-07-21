import React from 'react';
import { useNavigate } from 'react-router-dom';
import { buttonStyles } from '../../constants/buttonStyles';
import Container from '../../components/Container/Container';

const CheckoutSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <Container>
        {' '}
        <div className="max-w-md mx-auto text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-elegant font-bold text-gray-800 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your purchase. Your order has been successfully placed and is being processed.
          </p>

          {/* Order Details */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h2 className="text-xl font-elegant font-semibold text-gray-800 mb-4">Order Details</h2>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-semibold text-gray-800">#ORD-{Date.now().toString().slice(-8)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date:</span>
                <span className="font-semibold text-gray-800">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-semibold text-gray-800">3-5 business days</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-elegant font-semibold text-gray-800 mb-3">What's Next?</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• You'll receive an email confirmation shortly</p>
              <p>• We'll send you tracking information once your order ships</p>
              <p>• You can track your order status in your account</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => navigate('/products')}
              // className={`w-full ${buttonStyles.primary} py-3 font-elegant font-medium`}
              className="w-full  bg-accent rounded shadow hover:bg-blue-700 text-white transition py-3 font-elegant font-medium"
            >
              Continue Shopping
            </button>

            <button
              onClick={() => navigate('/account')}
              className={`w-full ${buttonStyles.secondary} py-3 font-elegant font-medium`}
            >
              View My Orders
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutSuccessPage;
