import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const CartHeader = () => {
  const { cartItems } = useContext(AppContext);
  const cartItemCount = cartItems.length;
  return (
    <Link className="text-xl relative z-10 mr-12" to="cart">
      Корзина
      <span
        className={`absolute -bottom-2 -right-8 bg-black rounded-full w-7 h-7 flex justify-center items-center ${
          cartItemCount > 0 ? '' : 'hidden'
        }`}>
        {cartItemCount}
      </span>
    </Link>
  );
};

export default CartHeader;
