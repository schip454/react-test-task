import { useEffect, useState } from 'react';
import {
  getProduct,
  getProductColor,
  getProducts,
  getSize,
  getSizes,
} from '../../services/api';
import Product from './Product';
import Loader from '../Loader/Loader';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const data = await getProducts();
      const data2 = await getSizes();
      const data3 = await getSize(1);
      const data4 = await getProduct(1);
      const data5 = await getProductColor(1, 1);

      console.log(data, 'getProducts');
      setProducts(data);
      setIsLoading(false);
      console.log(data2, 'getSizes');
      console.log(data3, 'getSize');
      console.log(data4, 'getProduct');
      console.log(data5, 'getProductColor');
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
