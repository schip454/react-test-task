import { createContext, useState } from 'react';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [selectedSizeId, setSelectedSizeId] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  const value = {
    selectedColorId,
    setSelectedColorId,
    selectedSizeId,
    setSelectedSizeId,
    productDetails,
    setProductDetails,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
