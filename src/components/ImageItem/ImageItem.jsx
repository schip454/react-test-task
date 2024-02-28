import React, { useState } from 'react';

const ImageItem = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    setIsZoomed((prevState) => !prevState);
  };

  return (
    <div className="image-container">
      <img
        src={src}
        alt={alt}
        onClick={handleZoom}
        className={isZoomed ? 'zoomed' : ''}
      />
    </div>
  );
};

export default ImageItem;
