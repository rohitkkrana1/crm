import React from 'react';
import PropTypes from 'prop-types';
import { Topbar } from './components';


const Minimal = props => {
  const { children } = props;

  

  return (
    <div className="">
      <Topbar />
      <main className="">{children}</main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;
