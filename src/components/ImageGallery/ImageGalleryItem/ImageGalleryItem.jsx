import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  url,
  openModal,
  largeUrl,
  category,
}) {
  return (
    <img
      data-url={largeUrl}
      src={url}
      alt={category}
      className="ImageGalleryItem-image"
      onClick={openModal}
    />
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  largeUrl: PropTypes.string.isRequired,
  category: PropTypes.string,
};
