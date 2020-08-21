import React, { Component } from 'react'
import {Card } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import moment from "moment";
import "../css/dynamicFilter.scss";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

export class DynamicFilter extends Component {
   

    render() {     
        
        return (
            <Card className="p-0 m-0 DynamicFilter">
                <Card.Body style={{padding:"0.7rem"}}>
                <h3 style={{fontSize:"1.2rem"}} className="pb-3">Dynamic Filter</h3>
                <p className="pb-2 bold" style={{fontWeight:"bold"}}>Time Filter</p>
                <form  noValidate>
                    <TextField
                        id="Cdate"
                        label="Created Date"
                        type="datetime-local"
                        defaultValue="2017-05-24"
                        className="dateTime form-control"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <br/><br/>
                    <TextField
                        id="Mdate"
                        label="Modified Date"
                        type="datetime-local"
                        formatDate={(date)=>{
                            moment(date).format('dd/mm/yyyy h:i')
                        }}
                        defaultValue="2017-05-24"
                        className="dateTime form-control"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    </form>
                  
                </Card.Body>
                <hr />
                <Card.Body style={{padding:"0.1rem 0.7rem"}}>
                <p className="pb-2 bold">Lead State</p>
                <form  noValidate>               
                    <FormGroup aria-label="position" col>
                        <FormControlLabel
                        value="top"
                        control={<Checkbox color="primary" />}
                        label={
                            <>                               
                                <p className="alignleft">Hot</p>
                                <p className="alignright">(1422)</p>
                            </>
                        }
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="top"
                        control={<Checkbox color="primary" />}
                        label={
                            <>                               
                                <p className="alignleft">Cold</p>
                                <p className="alignright">(120)</p>
                            </>
                        }
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="top"
                        control={<Checkbox color="primary" />}
                        label={
                            <>                               
                                <p className="alignleft">Hot</p>
                                <p className="alignright">(90)</p>
                            </>
                        }
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="top"
                        control={<Checkbox color="primary" />}
                        label={
                            <>                               
                                <p className="alignleft">Closed</p>
                                <p className="alignright">(10)</p>
                            </>
                        }
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="top"
                        control={<Checkbox color="primary" />}
                        label={
                            <>                               
                                <p className="alignleft">Proposed Visit</p>
                                <p className="alignright">(12546)</p>
                            </>
                        }
                        
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="top"
                        control={<Checkbox color="primary" />}
                        label={
                            <>                               
                                <p className="alignleft">Site Visit</p>
                                <p className="alignright">(32546)</p>
                            </>
                        }
                        labelPlacement="end"
                        />
                    </FormGroup>                   
                </form>
                </Card.Body>
                <hr/>
                <Card.Body style={{padding:"0.1rem 0.7rem"}}>
                <p className="pb-2 bold">Lead Group</p>
                <form  noValidate>               
                    <FormGroup aria-label="position" col>
                        <FormControlLabel
                        value="top"
                        control={<Checkbox color="primary" />}
                        label={
                            <>                               
                                <p className="alignleft">Lead</p>
                                <p className="alignright">(1245)</p>
                            </>
                        }
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="top"
                        control={<Checkbox color="primary" />}
                        label={
                            <>                               
                                <p className="alignleft">Channel Partner</p>
                                <p className="alignright">(120)</p>
                            </>
                        }
                        labelPlacement="end"
                        />
                       
                    </FormGroup>                   
                </form>
                </Card.Body>
            </Card>
        )
    }
}

export default DynamicFilter
