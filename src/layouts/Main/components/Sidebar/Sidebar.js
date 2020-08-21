import React from 'react';

import PropTypes from 'prop-types';

import MoreIcon from '@material-ui/icons/More';
import LandscapeIcon from '@material-ui/icons/Landscape';
import Sss from '@material-ui/icons/ArrowDropDown';
import CartIcon from '@material-ui/icons/ShoppingBasket';

//import { Profile, SidebarNav, UpgradePlan } from './components';



const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  return (
   <>
  
    <div className="fixed-sidebar-left ">
		<div className="slimScrollDiv">

		<ul className="nav navbar-nav side-nav nicescroll-bar">
				<li className="navigation-header">
				<div className="pull-left"><span>Main</span> </div>
				<div className="pull-left"><i><MoreIcon  className="mr-20"/></i></div>	
				<div className="clearfix"></div>
				</li>
				<li>
					<a className="active" href="javascript:void(0);" data-toggle="collapse" data-target="#dashboard_dr"><div className="pull-left"><i className="mr-20"><LandscapeIcon  /></i><span className="right-nav-text">Dashboard</span></div><div className="pull-right"><Sss /></div><div className="clearfix"></div></a>
					<ul id="dashboard_dr" className="collapse collapse-level-1">
						<li>
							<a className="active-page" href="index.html">Analytical</a>
						</li>
						<li>
							<a  href="index2.html">Demographic</a>
						</li>
						<li>
							<a href="index3.html">Project</a>
						</li>
						<li>
							<a href="profile.html">profile</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="javascript:void(0);" data-toggle="collapse" data-target="#ecom_dr" className="collapsed" aria-expanded="false"><div className="pull-left"><CartIcon className="mr-20" /><span className="right-nav-text">E-Commerce</span></div><div className="pull-right"><span className="label label-success">hot</span></div><div className="clearfix"></div></a>
					<ul id="ecom_dr" className="collapse-level-1 collapse" aria-expanded="false">
						<li>
							<a href="e-commerce.html">Dashboard</a>
						</li>
						<li>
							<a href="product.html">Products</a>
						</li>
						<li>
							<a href="product-detail.html">Product Detail</a>
						</li>
						<li>
							<a href="add-products.html">Add Product</a>
						</li>
						<li>
							<a href="product-orders.html">Orders</a>
						</li>
						<li>
							<a href="product-cart.html">Cart</a>
						</li>
						<li>
							<a href="product-checkout.html">Checkout</a>
						</li>
					</ul>
				</li>
		</ul>
		</div>
        </div>
	
   </>);
};


export default Sidebar;
