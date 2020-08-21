import React, { Component } from 'react'
import {Row,Col,Card,Button} from "react-bootstrap"
import TextField from '@material-ui/core/TextField';

 export class AddCompany extends Component {
    handleChange=e=>{

    }
    handleSubmit=event=>{
        event.preventDefault();
    }
    render() {
        return (<>
        <h3 class="h5">Add New Company</h3>
        <br/>       
            <form method="post" onSubmit={this.handleSubmit}>
            <Card className="m-0">
                <Card.Body>
                <Row>
                    <Col xs={12} sm={6} md={3}  >
                    <TextField label="Comapany Name" onChange={this.handleChange} className="form-control" type="text" name="companyName" validate   />	
                    <span class="help-block">Please Enter Company Name <span className="text-danger">*</span> </span>
                    </Col>
                    <Col xs={12} sm={6} md={3}  >
                    <TextField label="Comapany Email" onChange={this.handleChange} className="form-control" type="email" name="companyEmail" validate   />	
                    <span class="help-block">Please Enter Company email <span className="text-danger">*</span> </span>
                    </Col>  
                    <Col xs={12} sm={6} md={3}  >
                    <TextField label="Comapany GST" onChange={this.handleChange} className="form-control" type="text" name="companyGST" validate   />	
                    <span class="help-block">Please Enter Company GST <span className="text-danger">*</span> </span>
                    </Col>  
                    <Col xs={12} sm={6} md={3}  >
                    <TextField label="Comapany Type" onChange={this.handleChange} className="form-control" type="text" name="companyType" validate   />	
                    <span class="help-block">Please Enter Company Type  </span>
                    </Col> 
                    <Col xs={12} sm={6} md={3}  >
                    <TextField label="Company Website" onChange={this.handleChange} className="form-control" type="text" name="companyWebsite" validate   />	
                    <span class="help-block"> Company url ex. http//www.asc.com/ </span>
                    </Col> 
                    <Col xs={12} sm={6} md={6}  >
                    <TextField label="Addesss" onChange={this.handleChange} className="form-control" type="text" name="companyAddress" validate   />	
                    <span class="help-block">Please Enter Company Address <span className="text-danger">*</span> </span>
                    </Col>  
                    <Col xs={12} sm={6} md={3}  >
                    <TextField label="Company City" onChange={this.handleChange} className="form-control" type="text" name="companyCity" validate   />	
                    <span class="help-block">Please Enter Company City <span className="text-danger">*</span> </span>
                    </Col> 
                    <Col xs={12} sm={6} md={4}  >
                    <TextField label="Company State" onChange={this.handleChange} className="form-control" type="text" name="companySate" validate   />	
                    <span class="help-block">Please Enter Company State <span className="text-danger">*</span> </span>
                    </Col> 
                    <Col xs={12} sm={6} md={4}  >
                    <TextField label="Company Country" onChange={this.handleChange} className="form-control" type="text" name="companyCountry" validate   />	  
                    <span class="help-block">Please Enter Company Country <span className="text-danger">*</span> </span>  
                    </Col> 
                    <Col xs={12} sm={6} md={4}  >
                    <TextField label="Company Phone" onChange={this.handleChange} className="form-control" type="text" name="companyPhone" validate   />	
                    <span class="help-block">Please Enter Company Phone Number  <span className="text-danger">*</span> </span>    
                    </Col> 
                    <Col xs={12} sm={6}  >
                    <TextField label="User Full Name" onChange={this.handleChange} className="form-control" type="text" name="companyUserFullName" validate   />	 
                    <span class="help-block">Please Enter User Name <span className="text-danger">*</span> </span>   
                    </Col> 
                    <Col xs={12} sm={6}  >
                    <TextField label="User Mobile" onChange={this.handleChange} className="form-control" type="text" name="companyUserMobile" validate   />	    
                    <span class="help-block">Please Enter User Mobile <span className="text-danger">*</span> </span>
                    </Col> 
                    <Col xs={12} sm={6}  >
                    <TextField label="User Designation" onChange={this.handleChange} className="form-control" type="text" name="companyUserUserDesignation" validate   />	
                    <span class="help-block">Please Enter User Designation <span className="text-danger">*</span> </span>    
                    </Col> 
                    <Col xs={12} sm={6}  >
                    <TextField label="User Email" onChange={this.handleChange} className="form-control" type="email" name="UserEmail" validate   />	
                    <span class="help-block">Please enter user email. This will we admin username of company <span className="text-danger">*</span> </span>
                    </Col>
                    <Col xs={12} sm={6}  >
                    <TextField label="User Password" onChange={this.handleChange} className="form-control" type="password" name="UserPassword" validate   />	
                    <span class="help-block">Please enter user password. This will we admin user password of company <span className="text-danger">*</span> </span>
                    </Col>
                    <Col xs={12} sm={6}  >
                    <TextField label="Confoirm Password" onChange={this.handleChange} className="form-control" type="email" name="UserPassword" validate   />	
                    <span class="help-block">Please retype password. to confirm your choosen password <span className="text-danger">*</span> </span>
                    </Col>
                    <Col xs={12} sm={4}  >
                    <TextField label="SIP" onChange={this.handleChange} className="form-control" type="text" name="companySip" validate   />	
                    <span class="help-block">Company SIP id for calling, If Use! </span>
                    </Col>
                    <Col xs={12} sm={4}  >
                    <TextField label="GSM" onChange={this.handleChange} className="form-control" type="text" name="companyGSM" validate   />	
                    <span class="help-block">Company GSM id for calling, If Use! </span>
                    </Col>
                    <Col xs={12} sm={4}  >
                    <TextField label="Third Pirty" onChange={this.handleChange} className="form-control" type="text" name="companyThirdPirty" validate   />	
                    <span class="help-block">Company Third Pirty id for calling, If Use! </span>
                    </Col>
                </Row>
                <Button className="btn btn-success">Create Company</Button>
                </Card.Body>
                </Card>
            </form>

            </>
        )
    }
}

export default AddCompany
