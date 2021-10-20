import React from "react";
import PropTypes from "prop-types";
import { ImageGalleryItemStyled } from "./ImageGalleryItemStyled";

const ImageGalleryItem = ({ image, onOpenModal }) => {
  return (
    <ImageGalleryItemStyled>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
        onClick={() => onOpenModal(image.largeImageURL)}
      />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  onOpenModal: PropTypes.func,
};

export default ImageGalleryItem;
