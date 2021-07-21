//import s from "./FilterContacts.module.css";
//import PropTypes from "prop-types";

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick, tags }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => onClick({ largeImageURL, tags })}
      />
    </li>
  );
};

// ImageGalleryItem.propTypes = {
// };

export default ImageGalleryItem;
