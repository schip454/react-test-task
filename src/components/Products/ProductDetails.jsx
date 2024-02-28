import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getProduct,
  getProductColor,
  getSize,
  getSizes,
} from '../../services/api';
import { Link } from 'react-router-dom';

import Loader from '../Loader/Loader';
import ImageList from '../ImageItem/ImageList';

const ProductDetails = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const [allSizes, setAllSizes] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      // const data = await getProducts();
      const data = await getProduct(id);
      const data2 = await getSizes();
      const data3 = await getSize(1);
      const data5 = await getProductColor(2, 3);

      console.log(data, 'getProduct');

      setProductDetails(data);
      setAllSizes(data2);
      setIsLoading(false);

      console.log(data2, 'getSizes');
      console.log(data3, 'getSize');
      console.log(data5, 'getProductColor');
    };

    fetchProducts();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className=" max-w-[1280px] flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4">{productDetails?.name}</h2>
      <div className="flex justify-center gap-6 items-center">
        {productDetails?.colors?.map((color) => (
          <div key={color.id} className="text-xl flex flex-col gap-2">
            <ImageList
              images={color.images}
              alt={`${productDetails?.name} ${color.name}`}
            />
            <p className="">Цвет: {color.name}</p>
            <p className="">{color.description}</p>
            <p className="">Цена: {color.price}$</p>
            {/* {color.sizes.length > 0 ? (
              <p>
                Размеры:
                {color.sizes.map((size) => (
                  <span key={size}> {size}</span>
                ))}
              
              </p>
            ) : (
              <p>Размеров нет</p>
            )} */}
            {
              <p>
                Размеры:
                {allSizes &&
                  allSizes.map((size) => (
                    <ul key={size.id}>
                      <li>
                        {size.label}
                        {size.number}
                      </li>
                    </ul>
                  ))}
              </p>
            }
          </div>
        ))}
      </div>
      <div className=" mt-4">
        <Link className="text-lg hover:underline" to="/">
          Назад
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
