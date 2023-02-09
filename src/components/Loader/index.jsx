import React from "react";

import {ThreeDots} from "react-loader-spinner";
import PropTypes from "prop-types";

const Loader = ({ isUpdated, className }) => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{justifyContent: 'center'}}
      wrapperClassName={className || ''}
      visible={!isUpdated}
    />
  )
}

Loader.propTypes = {
  isUpdated: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

export default Loader;
