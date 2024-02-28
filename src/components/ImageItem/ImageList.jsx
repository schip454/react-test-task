import { useState } from 'react';
import ImageItem from './ImageItem';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

const ImageList = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="w-[300px] relative">
      <ImageItem src={images[currentIndex]} alt={alt} />
      <div className="absolute top-1/2  -translate-y-1/2 w-full">
        <button
          className="absolute left-2 hover:bg-black/30  rounded-3xl  transition-colors"
          onClick={handlePrevious}>
          <FaArrowLeft
            fontSize={38}
            className="fill-black hover:fill-white p-1"
          />
        </button>
        <button
          className="absolute right-2  hover:bg-black/30  rounded-3xl  transition-colors"
          onClick={handleNext}>
          <FaArrowRight
            fontSize={38}
            className="fill-black hover:fill-white p-1"
          />
        </button>
      </div>
    </div>
  );
};

export default ImageList;
