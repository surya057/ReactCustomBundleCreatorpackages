import React, { Component } from "react";
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import mobile from '../assets/mobile.png'
import phone from '../assets/phone.png'
import tv from '../assets/tv.png'
import laptop from '../assets/laptop.png'
import me from '../assets/me.png'
import partner from '../assets/partner.png'
import partnerk from '../assets/partnerk.png'
import kids from '../assets/kids.png'
import other from '../assets/other.png'
import day from '../assets/day.png'
import night from '../assets/night.png'
import allday from '../assets/24.png'


class Question1 extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "100px" }}>
          <Col xs={8}><h1 style={{ fontFamily: "GT-Walsheim" }}>Hey! Let’s find your tailored package. Ready to go?</h1></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: "40px" }}>
          <Col xs={4}>
            <Form.Control type="email" placeholder="First name" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Col>
          <Col xs={4}>
            <Form.Control type="email" placeholder="Last name" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Col>
        </Row>
        <Row className="justify-content-center" style={{ marginTop: "40px", marginBottom: "50px" }}>
          <Col className="text-center" xs={6}>
            <Button className="bt-btn" href="/question2" variant="" type="submit">
              LET'S GO
            </Button>
          </Col>
        </Row>
      </Container>
      
    )
  }
};

class Question2 extends Component {

  render() {


    return (
      <Container>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "100px" }}>
          <Col xs={8}><h1 style={{ fontFamily: "GT-Walsheim" }}>Great to meet you Fraser! What devices do you have in your home?</h1></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: "40px" }}>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={mobile} alt="mobile"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>MOBILE</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={tv} alt="tv"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>TV</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={phone} alt="phone"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>LANDLINE</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={laptop} alt="laptop"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>LAPTOP/PC</p>
                </Col>
              </Row>
            </Container>
          </Col>
          
        </Row>
        <Row className="justify-content-center" style={{ marginTop: "40px", marginBottom: "50px" }}>
          <Col className="text-center" xs={6}>
            <Button className="bt-btn" href="/question3" variant="" type="submit">
              NEXT
            </Button>
          </Col>
        </Row>
      </Container>
      
    )
  }
};

class Question3 extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "100px" }}>
          <Col xs={8}><h1 style={{ fontFamily: "GT-Walsheim" }}>Who else lives in your home?</h1></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: "40px" }}>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={me} alt="justme"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>JUST ME</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={partner} alt="partner"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>MY PARTNER</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={partnerk} alt="partnerkids"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>PARTNER & KIDS</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={kids} alt="kids"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>MY KIDS</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={other} alt="other"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>OTHER</p>
                </Col>
              </Row>
            </Container>
          </Col>
          
        </Row>
        <Row className="justify-content-center" style={{ marginTop: "40px", marginBottom: "50px" }}>
          <Col className="text-center" xs={6}>
            <Button className="bt-btn" href="/question4" variant="" type="submit">
              NEXT
            </Button>
          </Col>
        </Row>
      </Container>
      
    )
  }
};

class Question4 extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "100px" }}>
          <Col xs={8}><h1 style={{ fontFamily: "GT-Walsheim" }}>When is your internet used most?</h1></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: "40px" }}>
          
          
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={day} alt="day"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>DAY</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={night} alt="night"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>NIGHT</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={allday} alt="allday"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>ALL DAY</p>
                </Col>
              </Row>
            </Container>
          </Col>
          
        </Row>
        <Row className="justify-content-center" style={{ marginTop: "40px", marginBottom: "50px" }}>
          <Col className="text-center" xs={6}>
            <Button className="bt-btn" href="/question5" variant="" type="submit">
              NEXT
            </Button>
          </Col>
        </Row>
      </Container>
      
    )
  }
};

class Question5 extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "100px" }}>
          <Col xs={8}><h1 style={{ fontFamily: "GT-Walsheim" }}>On a typical evening, what devices are used?</h1></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ textAlign: "center" }}>
          <Col xs={8}><p style={{ color: "#666666" }}>Click to add as many as it applies</p></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: "40px" }}>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={mobile} alt="mobile"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>MOBILE</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={tv} alt="tv"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>TV</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={phone} alt="phone"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>LANDLINE</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={laptop} alt="laptop"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>LAPTOP/PC</p>
                </Col>
              </Row>
            </Container>
          </Col>
          
          
        </Row>
        <Row className="justify-content-center" style={{ marginTop: "40px", marginBottom: "50px" }}>
          <Col className="text-center" xs={6}>
            <Button className="bt-btn" href="/question6" variant="" type="submit">
              NEXT
            </Button>
          </Col>
        </Row>
      </Container>
      
    )
  }
};

class Question6 extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "100px" }}>
          <Col xs={8}><h1 style={{ fontFamily: "GT-Walsheim" }}>What do you watch on TV?</h1></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: "40px" }}>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={mobile} alt="mobile"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>MOVIES</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={tv} alt="tv"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>SPORTS</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={phone} alt="phone"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>TV SERIES</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={laptop} alt="laptop"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>NEWS</p>
                </Col>
              </Row>
            </Container>
          </Col>
          
        </Row>
        <Row className="justify-content-center" style={{ marginTop: "40px", marginBottom: "50px" }}>
          <Col className="text-center" xs={6}>
            <Button className="bt-btn" href="/question7" variant="" type="submit">
              NEXT
            </Button>
          </Col>
        </Row>
      </Container>
      
    )
  }
};

class Question7 extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "100px" }}>
          <Col xs={8}><h1 style={{ fontFamily: "GT-Walsheim" }}>Great! We love Sports! Which Sports do you like?</h1></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: "40px" }}>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={mobile} alt="mobile"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>RUGBY UNION</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={tv} alt="tv"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>FOOTBALL</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={phone} alt="phone"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>BOXING</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={laptop} alt="laptop"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>MMA</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={laptop} alt="laptop"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>CRICKET</p>
                </Col>
              </Row>
            </Container>
          </Col>
          
        </Row>
        <Row className="justify-content-center" style={{ marginTop: "40px", marginBottom: "50px" }}>
          <Col className="text-center" xs={6}>
            <Button className="bt-btn" href="/question8" variant="" type="submit">
              NEXT
            </Button>
          </Col>
        </Row>
      </Container>
      
    )
  }
};

class Question8 extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "100px" }}>
          <Col xs={8}><h1 style={{ fontFamily: "GT-Walsheim" }}>What do you like to use your mobile phone for?</h1></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: "40px" }}>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={mobile} alt="mobile"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>PHONE CALLS</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={tv} alt="tv"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>SOCIAL MEDIA</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={phone} alt="phone"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>GAMING</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={laptop} alt="laptop"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>STREAMING</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={laptop} alt="laptop"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>TEXTING</p>
                </Col>
              </Row>
            </Container>
          </Col>
          
        </Row>
        <Row className="justify-content-center" style={{ marginTop: "40px", marginBottom: "50px" }}>
          <Col className="text-center" xs={6}>
            <Button className="bt-btn" href="/loading" variant="" type="submit">
              NEXT
            </Button>
          </Col>
        </Row>
      </Container>
      
    )
  }
};


export { 
  Question1, 
  Question2, 
  Question3, 
  Question4, 
  Question5, 
  Question6,
  Question7,
  Question8 };