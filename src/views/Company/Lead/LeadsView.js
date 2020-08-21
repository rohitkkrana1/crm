import React, { Component } from 'react'
import {LeadsTable,DynamicFilter} from "./Widgets"
import {Row, Col} from "react-bootstrap"
export class LeadsView extends Component {
    render() {
        return (
            <Row>
                <Col sm={12} md={2} className="p-0">
                    <DynamicFilter />
                </Col>
                <Col sm={12} md={10}>
                    <LeadsTable />
                </Col>
            </Row>
        )
    }
}

export default LeadsView
