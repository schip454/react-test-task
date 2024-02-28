const SizeBtn = ({
  size,
  availableSizes,
  selectedSizeId,
  toggleSelectedSize,
}) => {
  return (
    <button
      className={`rounded-xl px-2 transition-colors ${
        availableSizes.includes(size) ? 'bg-black' : 'bg-gray-400'
      } ${selectedSizeId === size.id ? 'bg-blue-300' : ''}`}
      disabled={!availableSizes.includes(size)}
      onClick={() => toggleSelectedSize(size.id)}>
      {size.label}
    </button>
  );
};

export default SizeBtn;
