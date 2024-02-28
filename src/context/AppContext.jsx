import { createContext, useState } from 'react';
import some from 'lodash.some';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedColorId, setSelectedColorId] = useState(1);
  const [selectedSizeId, setSelectedSizeId] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const [productId, setProductId] = useState(null);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    const cartItem = {
      ...productDetails,
      productId,
      selectedColorId,
      selectedSizeId,
    };

    if (some(cartItems, cartItem)) {
      alert('Товар уже добавлен в корзину');
      return;
    }

    setCartItems([...cartItems, cartItem]);
  };

  const removeFromCart = (cartItem) => {
    setCartItems(
      cartItems.filter(
        (item) =>
          item.productId !== cartItem.productId ||
          item.selectedColorId !== cartItem.selectedColorId ||
          item.selectedSizeId !== cartItem.selectedSizeId
      )
    );
  };

  const value = {
    selectedColorId,
    setSelectedColorId,
    selectedSizeId,
    setSelectedSizeId,
    productDetails,
    setProductDetails,
    addToCart,
    productId,
    setProductId,
    cartItems,
    setCartItems,
    removeFromCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
