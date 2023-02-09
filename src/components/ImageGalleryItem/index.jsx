import React from "react";

import PropTypes from "prop-types";

import Modal from "../Modal";

import '../index.css';

export default class ImageGalleryItem extends React.Component {
  state = {
    activeModal: false,
  }

  setActive = (isActive) => {
    this.setState({ activeModal: isActive });
  }

  render() {
    const { imageSrc, imageTag } = this.props;
    const { activeModal } = this.state;
    return (
      <>
        <li className="ImageGalleryItem" onClick={() => this.setActive(true)}>
          <img src={imageSrc} alt={imageTag} className="ImageGalleryItem-image"/>
        </li>
        <Modal imageSrc={imageSrc} imageTag={imageTag} isActive={activeModal} setIsActive={this.setActive}/>
      </>
    )
  }
}

ImageGalleryItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageTag: PropTypes.string.isRequired,
}
