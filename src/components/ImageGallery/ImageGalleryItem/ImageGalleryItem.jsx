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
