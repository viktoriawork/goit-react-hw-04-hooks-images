import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyled } from "./ImageGalleryStyled";

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ImageGalleryStyled>
      {images.map((image) => (
        <ImageGalleryItem
          image={image}
          onOpenModal={onOpenModal}
          key={image.id}
        />
      ))}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  onOpenModal: PropTypes.func,
};

export default ImageGallery;
