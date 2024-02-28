import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { getProduct, getProductColor, getSize } from '../../services/api';
import Loader from '../Loader/Loader';
import BackBtn from '../BackBtn/BackBtn';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setIsLoading(true);
      const details = await Promise.all(
        cartItems.map(async (item) => {
          const colorDetails = await getProductColor(
            item.productId,
            item.selectedColorId
          );
          const sizeDetails = await getSize(item.selectedSizeId);
          const productTitle = await getProduct(item.productId);
          return {
            ...item,
            ...colorDetails,
            size: sizeDetails,
            productTitle,
          };
        })
      );
      setIsLoading(false);
      setProductDetails(details);
    };

    fetchProductDetails();
  }, [cartItems]);

  return (
    <div className="px-4 pb-4">
      <BackBtn />
      {!cartItems.length && <p>Корзина пуста</p>}
      {!isLoading && productDetails.length > 0 ? (
        <div className="flex items-center gap-4 flex-wrap">
          {productDetails.map((item, i) => (
            <div className="w-[200px] flex flex-col gap-1 " key={i}>
              <h4>Название: {item.productTitle.name}</h4>
              <img src={item.images[0]} alt="" />
              <p>Цвет: {item.name}</p>
              <p>Размер: {item.size.label}</p>
              <p>Цена: {item.price}</p>
              <button
                className="text-red-500 cursor-pointer"
                onClick={() => removeFromCart(item)}>
                Удалить
              </button>
            </div>
          ))}
        </div>
      ) : (
        cartItems.length > 0 && <Loader />
      )}
    </div>
  );
};

export default Cart;
