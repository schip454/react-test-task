const SizeBtn = ({
  size,
  availableSizes,
  selectedSizeId,
  toggleSelectedSize,
}) => {
  return (
    <button
      className={`rounded-xl px-2 transition-colors ${
        availableSizes.includes(size) ? 'bg-black' : 'bg-gray-500'
      } ${selectedSizeId === size.id ? 'bg-blue-600' : ''}`}
      disabled={!availableSizes.includes(size)}
      onClick={() => toggleSelectedSize(size.id)}>
      {size.label}
    </button>
  );
};

export default SizeBtn;
