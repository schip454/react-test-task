import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import Product from './Product';
import Loader from '../Loader/Loader';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const data = await getProducts();

      setProducts(data);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex items-center justify-center gap-6">
      {!isLoading ? (
        products?.map((item) => <Product key={item.id} item={item} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Products;
