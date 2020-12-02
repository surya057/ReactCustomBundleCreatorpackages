import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import loading from '../assets/loading.gif'


export default class Loading extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 6000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return (
      this.state.redirect ? <Redirect to="/packages" /> :
      <Container>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "100px" }}>
          <Col xs={8}><h1 style={{ fontFamily: "GT-Walsheim" }}>Let's crunch some numbers</h1></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} className="d-flex justify-content-center">
            <img style={{height: "50vh" }} src={loading} alt="loading..." />
          </Col>
        </Row>
      </Container>
      
    )
  }
};

