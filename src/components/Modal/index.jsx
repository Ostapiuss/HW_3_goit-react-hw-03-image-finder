import React from "react";

import PropTypes from "prop-types";

import '../index.css';

export default class Modal extends React.Component {
  render() {
  const { imageSrc, imageTag, isActive, setIsActive } = this.props;
    return (
      <>
        {
          isActive && (
            <div className="Overlay" onClick={() => setIsActive(false)}>
              <div className="Modal" onClick={(e) => e.stopPropagation()}>
                <img src={imageSrc} alt={imageTag} />
              </div>
            </div>
          )
        }
      </>
    )
  }
}

Modal.porpTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageTag: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
}
