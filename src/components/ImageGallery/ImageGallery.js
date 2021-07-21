//import s from "./List.module.css";
//import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images, onClick }) {
  return (
    <ul className="ImageGallery">
      {images.map((el) => {
        //console.log(el.id, el.webformatURL);
        return (
          <ImageGalleryItem
            key={el.id}
            webformatURL={el.webformatURL}
            largeImageURL={el.largeImageURL}
            tags={el.tags}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
}

// ImageGallery.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default ImageGallery;
