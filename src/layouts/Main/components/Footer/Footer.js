import React from 'react';
import PropTypes from 'prop-types';




const Footer = props => {
  const { className, ...rest } = props;
  
  return (
    <footer className="footer container-fluid pl-30 pr-30">
    <div className="row">
      <div className="col-sm-12">
        <p>2020 © Vojon. Prepared By Rohit</p>
      </div>
    </div>
  </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
