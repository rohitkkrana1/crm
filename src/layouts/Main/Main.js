import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Container} from 'react-bootstrap'
import { Topbar,Sidebar,Footer } from './components';
import "../assets/scss/main.scss";


const Main = props => { 
  const { children } = props;

  return (<Container fluid className="p-0">
    <Topbar />
    <Sidebar />
    
    <div className="page-wrapper">
    <Container fluid>
    {children}

    <Footer/>
    </Container>  
    </div> 
  
  </Container>)
}           

Main.propTypes = {
  children: PropTypes.node
};

export default Main;