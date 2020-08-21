import React, { Component } from 'react';
import {Card,Row,Col,ListGroup,Button} from "react-bootstrap";

import LeadIcon from '@material-ui/icons/BubbleChart';
import SettingIcon from '@material-ui/icons/Settings';
import DetailIcon from '@material-ui/icons/Dehaze';
import ProjectIcon from '@material-ui/icons/AccountTree';
export class Company extends Component {
    render() {
        return (
            <>
            <Button variant="success" size="sm" >Add New Company</Button>
            <br/><br/>
            <Row>
                <Col sm={6} md={4} xs={12} className="mb-3">
                <Card>
                <Card.Body>
                    <Card.Title>Swaminarayan Group</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <br/>
                    <ListGroup horizontal>
                        <ListGroup.Item variant="primary" className="text-center"><LeadIcon /> Lead</ListGroup.Item>
                        <ListGroup.Item variant="warning" className="text-center"><SettingIcon /> Settings</ListGroup.Item>
                        <ListGroup.Item variant="info" className="text-center"><DetailIcon /> Details</ListGroup.Item>
                        <ListGroup.Item variant="success" className="text-center"><ProjectIcon /> Projects</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                </Card>
                </Col>
                <Col sm={6} md={4} xs={12} className="mb-3">
                <Card>
                <Card.Body>
                    <Card.Title>Swaminarayan Group</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <br/>
                    <ListGroup horizontal>
                        <ListGroup.Item variant="primary" className="text-center"><LeadIcon /> Lead</ListGroup.Item>
                        <ListGroup.Item variant="warning" className="text-center"><SettingIcon /> Settings</ListGroup.Item>
                        <ListGroup.Item variant="info" className="text-center"><DetailIcon /> Details</ListGroup.Item>
                        <ListGroup.Item variant="success" className="text-center"><ProjectIcon /> Projects</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                </Card>
                </Col>
                <Col sm={6} md={4} xs={12} className="mb-3">
                <Card>
                <Card.Body>
                    <Card.Title>Swaminarayan Group</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <br/>
                    <ListGroup horizontal>
                        <ListGroup.Item variant="primary" className="text-center"><LeadIcon /> Lead</ListGroup.Item>
                        <ListGroup.Item variant="warning" className="text-center"><SettingIcon /> Settings</ListGroup.Item>
                        <ListGroup.Item variant="info" className="text-center"><DetailIcon /> Details</ListGroup.Item>
                        <ListGroup.Item variant="success" className="text-center"><ProjectIcon /> Projects</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                </Card>
                </Col>
                <Col sm={6} md={4} xs={12} className="mb-3">
                <Card>
                <Card.Body>
                    <Card.Title>Swaminarayan Group</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <br/>
                    <ListGroup horizontal>
                        <ListGroup.Item variant="primary" className="text-center"><LeadIcon /> Lead</ListGroup.Item>
                        <ListGroup.Item variant="warning" className="text-center"><SettingIcon /> Settings</ListGroup.Item>
                        <ListGroup.Item variant="info" className="text-center"><DetailIcon /> Details</ListGroup.Item>
                        <ListGroup.Item variant="success" className="text-center"><ProjectIcon /> Projects</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                </Card>
                </Col>
                <Col sm={6} md={4} xs={12} className="mb-3">
                <Card>
                <Card.Body>
                    <Card.Title>Swaminarayan Group</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <br/>
                    <ListGroup horizontal>
                        <ListGroup.Item variant="primary" className="text-center"><LeadIcon /> Lead</ListGroup.Item>
                        <ListGroup.Item variant="warning" className="text-center"><SettingIcon /> Settings</ListGroup.Item>
                        <ListGroup.Item variant="info" className="text-center"><DetailIcon /> Details</ListGroup.Item>
                        <ListGroup.Item variant="success" className="text-center"><ProjectIcon /> Projects</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                </Card>
                </Col>
                <Col sm={6} md={4} xs={12} className="mb-3">
                <Card>
                <Card.Body>
                    <Card.Title>Swaminarayan Group</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <br/>
                    <ListGroup horizontal>
                        <ListGroup.Item variant="primary" className="text-center"><LeadIcon /> Lead</ListGroup.Item>
                        <ListGroup.Item variant="warning" className="text-center"><SettingIcon /> Settings</ListGroup.Item>
                        <ListGroup.Item variant="info" className="text-center"><DetailIcon /> Details</ListGroup.Item>
                        <ListGroup.Item variant="success" className="text-center"><ProjectIcon /> Projects</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            </>
        )
    }
}

export default Company
