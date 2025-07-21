// Standard button styles for the application
export const buttonStyles = {
  // Primary button - main actions
  primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105",
  
  // Secondary button - secondary actions
  secondary: "bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-200 font-medium",
  
  // Success button - positive actions (add to cart, etc.)
  success: "bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105",
  
  // Danger button - destructive actions
  danger: "bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105",
  
  // Small button - compact actions
  small: "bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-sm",
  
  // Small success button
  smallSuccess: "bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-sm",
  
  // Icon button - buttons with icons
  icon: "flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-200",
  
  // Text button - minimal styling
  text: "text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium",
  
  // Ghost button - transparent background
  ghost: "bg-transparent border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
};

// Button size variants
export const buttonSizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-base", 
  lg: "px-6 py-4 text-lg"
};

// Common button props interface
export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
} 