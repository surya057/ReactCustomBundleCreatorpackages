import React, { Component } from "react";
import { Col, Container, Row } from 'react-bootstrap';


class Card extends Component {

  constructor(props) {
    super(props);
  
    this.toggleClass= this.toggleClass.bind(this);
    this.state = {
      isActive: false
    }
  }
  
  toggleClass() {
    if (this.state.isActive) {
      this.setState({
        isActive: false
      })
    }
    else {
      this.setState({
        isActive: true
      })
    }
  }

  

  render() {
    return (
            <Container className={this.state.isActive ? 'sqCard-active d-flex justify-content-center': 'sqCard d-flex justify-content-center'} onClick={this.toggleClass}>
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img className="image-dimension" style={{ height: "64px", marginTop: "30px" }} src={this.props.img} alt="img"></img>
                </Col>
                <Col className="card-content-bt" xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>{this.props.title}</p>
                </Col>
              </Row>
            </Container>     
    )
  }
};


export default Card ;