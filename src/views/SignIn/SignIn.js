import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {AuthService} from "../../helper"
import '../../assets/scss/login.scss';
import loginImg from '../../assets/images/login-bnr.jpg';
import logo from '../../assets/images/logo.png';
import {Row,Col,Container} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';



export class SignIn extends Component {
	state = {
		formSet:{
			email:"",
			password:"",
		},
		errorStatus:false,
		errorMsg:"",

	}

	handleChange=e=>{
		const {formSet} = {...this.state};
		let a = formSet
		let name = e.target.name;
		let value = e.target.value;
		a[name] = value;
		this.setState({...formSet,a});
	}

	handleSignIn = event => {
		event.preventDefault();		
		const {formSet} = {...this.state};
		
		AuthService.login(formSet,(err,res)=>{
			console.log(err);
		});
		
	  }
	  
    render() {
	
        return (
			<Container fluid>
            <Row>
                <Col sm="6"  className="login-section-wrapper">
			  <div className="brand-wrapper">
				<img src={logo} alt="logo" className="logo" />
			  </div>
			  <div className="login-wrapper my-auto">
				<h1 className="login-title">Log in</h1>
				<form method="post" onSubmit={this.handleSignIn}>
					<div class="form-group mb-5">
					<TextField label="Type Your email" onChange={this.handleChange} style={{marginTop:"0px",padding:"0px",borderBottom:"none"}} className="form-control" type="email" name="email" validate   />	 				 
					</div>
					<div class="form-group ">
					<TextField label="Type Your Password" style={{marginTop:"0px",padding:"0px",borderBottom:"none"}} className="form-control" group type="password" validate name="password" onChange={this.handleChange} />				 
					</div>
					<br/>
				  <button id="login" className="btn btn-block login-btn" type="submit" >Login</button>
				</form>
				<a href="javascript:void(0);" className="forgot-password-link">Forgot password?</a>
				<p className="login-wrapper-footer-text">Don't have an account? <a href="javascript:void(0);" className="text-reset">Register here</a></p>
			  </div>
</Col>
<Col sm="6" className="p-0  d-none d-sm-block">
<img src={loginImg} alt="login image" class="login-img" />
</Col>
            </Row>
			</Container>
        )
    }
}

export default withRouter(SignIn)
