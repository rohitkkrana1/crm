import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';




const Topbar = props => {
  const { className, ...rest } = props;



  return (
    <div>Place Logo in Minimal Topbar</div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
