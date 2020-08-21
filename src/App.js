import React, { Component } from "react";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import validate from 'validate.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';



const browserHistory = createBrowserHistory();

validate.validators = {
  ...validate.validators,
  ...validators
};

class App extends Component {
  render() {
    return (
      <>
      <Router history={browserHistory}>
          <Routes />
        </Router>
      </>
    );
  }
}

export default App;
