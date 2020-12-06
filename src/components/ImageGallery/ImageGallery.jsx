import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ photos, openModal, openLargePhoto }) {
  return (
    <ul className="ImageGallery ">
      {photos.map(photo => {
        return (
          <li
            key={photo.id}
            onClick={openLargePhoto}
            className="ImageGalleryItem"
          >
            <ImageGalleryItem
              category={photo.category}
              url={photo.webformatURL}
              largeUrl={photo.largeImageURL}
              openModal={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
}
