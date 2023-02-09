import React from "react";

import PropTypes from "prop-types";
import Loader from "../Loader";

import './style.scss'

const Button = ({ typeButton, textContent, isUpdated, onUpload }) => {
  return (
    <>
      {
        isUpdated && (
          <button type="button" className={`button ${typeButton}`} onClick={onUpload}>
            { textContent }
          </button>
        )
      }
      <Loader isUpdated={isUpdated} />
    </>
  )
}

Button.propTypes = {
  typeButton: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  onUpload: PropTypes.func,
}

export default Button;

