import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, getSizes } from '../../services/api';

import Loader from '../Loader/Loader';
import ImageList from '../ImageList/ImageList';
import SizeBtn from '../SizeBtn/SizeBtn';
import { AppContext } from '../../context/AppContext';
import BackBtn from '../BackBtn/BackBtn';

const ProductDetails = () => {
  const { id } = useParams();

  const {
    selectedSizeId,
    productDetails,
    addToCart,
    selectedColorId,
    setProductDetails,
    setSelectedSizeId,
    setSelectedColorId,
    setProductId,
  } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(false);
  const [allSizes, setAllSizes] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const product = await getProduct(id);
      const sizes = await getSizes();

      setProductDetails(product);
      setProductId(parseInt(id));
      setAllSizes(sizes);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const selectedColor = productDetails?.colors?.find(
    (color) => color.id === selectedColorId
  );

  const getAvailableSizes = () => {
    if (!selectedColor || !productDetails) return [];

    const availableSizes = [];
    for (const sizeId of selectedColor.sizes) {
      const size = allSizes.find((size) => size.id === sizeId);
      if (size) {
        availableSizes.push(size);
      }
    }

    return availableSizes;
  };
  const availableSizes = getAvailableSizes();

  const toggleSelectedSize = (size) => {
    if (selectedSizeId === size) {
      setSelectedSizeId(null);
    } else {
      setSelectedSizeId(size);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColorId) return alert('Выберите цвет');
    if (!availableSizes.length) return alert('Нет в наличии');
    if (!selectedSizeId) return alert('Выберите размер');

    addToCart();
  };

  const handleSelectColor = (colorId) => {
    setSelectedSizeId(null);
    setSelectedColorId(colorId);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-[1280px] flex flex-col justify-center">
      <BackBtn />

      <h2 className="text-3xl font-bold mb-4">{productDetails?.name}</h2>
      <div className="flex flex-col justify-center items-center">
        {productDetails?.colors?.map((color) => (
          <div key={color.id} className="text-xl w-[320px] flex flex-col gap-2">
            {color.id === selectedColorId && (
              <>
                <ImageList
                  images={color.images}
                  alt={`${productDetails?.name} ${color.name}`}
                />
                <p className="">Цвет: {color.name}</p>
                <p className="">{color.description}</p>
                <p className="">Цена: {color.price}$</p>
                <p>Размеры:</p>
                <div className="flex gap-2">
                  {allSizes.map((size) => (
                    <SizeBtn
                      key={size.id}
                      availableSizes={availableSizes}
                      selectedSizeId={selectedSizeId}
                      size={size}
                      toggleSelectedSize={toggleSelectedSize}
                    />
                  ))}
                </div>
                <p className="">Доступные цвета:</p>
                <div className="flex items-center gap-4">
                  {productDetails?.colors?.map((color) => (
                    <button
                      key={color.id}
                      className={`rounded-xl px-3 py-1 hover:bg-black/30 transition-colors ${
                        selectedColorId === color.id
                          ? 'bg-black hover:bg-black'
                          : ''
                      }`}
                      onClick={() => handleSelectColor(color.id)}>
                      {color.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className=" mt-4">
        <button
          onClick={handleAddToCart}
          className="rounded-xl text-lg px-3 py-1 hover:bg-slate-600/60 transition-colors ">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
