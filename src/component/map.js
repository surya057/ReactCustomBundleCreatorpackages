import React, { Component } from "react";
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import map from '../assets/map.png'


export default class Map extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "100px" }}>
          <Col xs={8}><h1 style={{ fontFamily: "GT-Walsheim" }}>Great! Just to make sure, is this right?</h1></Col>
        </Row>

        <Row className="d-flex justify-content-center" style={{ marginTop: "40px" }}>
          <Col xs={6}>
            <img className="img-responsive" style={{ width:"100%" }} src={map} alt="map"></img>
          </Col>
        </Row>

        <Row className="justify-content-center" style={{ marginTop: "40px", marginBottom: "50px" }}>
          <Col className="text-center" xs={6}>
            <Button className="bt-btn" href="/loading" variant="" type="submit">
              CONFIRM
            </Button>
          </Col>
        </Row>
        
      </Container>
      
    )
  }
};

