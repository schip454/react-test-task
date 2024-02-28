import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="w-[260px] h-full">
        {item.colors[0] ? (
          <img src={item.colors[0].images[0]} alt="" />
        ) : (
          <p className="text-red-500 text-sm">Изображение не найдено</p>
        )}
        <h4>{item.name}</h4>
      </div>
    </Link>
  );
};

export default Product;
