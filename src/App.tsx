import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './providers/AuthProvider';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
