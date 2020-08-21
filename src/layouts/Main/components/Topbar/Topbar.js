import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from "../../../assets/img/logo-small.png";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import AppIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';

import "../../../assets/js/main.js";

import {NavDropdown,Nav} from "react-bootstrap"

/*import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';*/


const Topbar = props => {
  const { classNameName, onSidebarOpen, ...rest } = props;

 // const classNamees = useStyles();

  const [notifications] = useState([]);

  return (
	<>  
	{/*mobile Nav */}
    <nav className="navbar navbar-inverse navbar-fixed-top d-block d-sm-none">
	
	<div className="nav-header ">
			<div className="logo-wrap align-middle">
				<img className="brand-img" src={logo} />
				<a className="brand-text">Vojon</a>
			</div>
			<a id="mobile-menu-btn" className="toggle-left-nav-btn inline-block ml-2 pull-left"><MenuIcon/></a>
			<a id="toggle_nav_btn" className="toggle-left-nav-btn inline-block ml-20 pull-left" href="javascript:void(0);"><i className="zmdi zmdi-menu"></i></a>
				<a id="toggle_mobile_search" data-toggle="collapse" data-target="#search_form" className="mobile-only-view" href="javascript:void(0);"><SearchIcon /></a>
				<a id="toggle_mobile_nav" className="mobile-only-view" href="javascript:void(0);"><MoreHorizIcon /></a>
				<form id="search_form" role="search" className="top-nav-search collapse pull-left">
					<div className="input-group">
						<input type="text" name="example-input1-group2" className="form-control" placeholder="Search" />
						<span className="input-group-btn">
						<button type="button" className="btn  btn-default"  data-target="#search_form" data-toggle="collapse" aria-label="Close" aria-expanded="true"><CloseIcon /></button>
						</span>
					</div>
				</form>
		</div>
		
		
	</nav>
	{/* desktop nav  */}
	<nav className="navbar navbar-inverse navbar-fixed-top d-none d-sm-block">
		<div className="pull-left hvr">
		<div className="nav-header pull-left">
			<div className="logo-wrap align-middle">
				<img className="brand-img" src={logo} />
				<a className="brand-text">Vojon</a>
			</div>
		</div>
		<a id="desktop-menu-btn" className="toggle-left-nav-btn inline-block ml-20 pull-left"><MenuIcon/></a>
		<form id="search_form" role="search" className="top-nav-search  pull-left">
					<div className="input-group">
						<input type="text" name="example-input1-group2" className="form-control" placeholder="Search" autoComplete="off" />
						<span className="input-group-btn search-icon-set">				
               			   <SearchIcon />
						</span>
					</div>					
				</form>
				</div>
				<div className="pull-right">
				<Nav className="mr-auto">
    
				<NavDropdown  alignRight  title={<SettingsIcon/>} id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>	  
				<Nav.Link href="#link"><AppIcon/></Nav.Link>
				<Nav.Link href="#home"><MoreVertIcon /></Nav.Link>
				<Nav.Link href="#home"><NotificationsIcon /></Nav.Link>
				</Nav>

				</div>
		
		
	</nav> 
	
	</>

  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
