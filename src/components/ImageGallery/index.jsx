import React from "react";

import PropTypes from "prop-types";

import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";

import '../index.css';

const ImageGallery = ({ images, uploadMoreImages, isUpdated }) => {
  return (
    <div className="ImageGallery">
      <ul className="ImageGallery-list">
        {
          images.map((image) => (
            <ImageGalleryItem imageSrc={image.largeImageURL}  imageTag={image.tags} key={image.id} />
          ))
        }
      </ul>
      <Button typeButton='load-button' textContent='Load more' onUpload={uploadMoreImages} isUpdated={isUpdated}/>
    </div>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  uploadMoreImages: PropTypes.func.isRequired,
  isUpdated: PropTypes.bool.isRequired,
}

export default ImageGallery;
