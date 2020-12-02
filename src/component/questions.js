import React, { Component } from "react";
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import Card from './card';
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
import movie from '../assets/movie.png'
import sport from '../assets/sports.png'
import news from '../assets/news.png'
import rugby from '../assets/rugby.png'
import football from '../assets/football.png'
import boxing from '../assets/boxing.png'
import mma from '../assets/mma.png'
import cricket from '../assets/cricket.png'
import texting from '../assets/texting.png'
import streaming from '../assets/streaming.png'
import gaming from '../assets/gaming.png'
import socialmedia from '../assets/socialmedia.png'


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
            <Card title={"MOBILE"} img={mobile}/>
          </Col>
          <Col xs={2}>
            <Card title={"TV"} img={tv}/>
          </Col>
          <Col xs={2}>
            <Card title={"LANDLINE"} img={phone}/>
          </Col>
          <Col xs={2}>
            <Card title={"LAPTOP/PC"} img={laptop}/>
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
            <Card title={"JUST ME"} img={me}/>
          </Col>
          <Col xs={2}>
            <Card title={"MY PARTNER"} img={partner}/>
          </Col>
          <Col xs={2}>
            <Card title={"PARTNER & KIDS"} img={partnerk}/>
          </Col>
          <Col xs={2}>
            <Card title={"MY KIDS"} img={kids}/>
          </Col>
          <Col xs={2}>
            <Card title={"OTHER"} img={other}/>
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
            <Card title={"DAY"} img={day}/>
          </Col>
          <Col xs={2}>
            <Card title={"NIGHT"} img={night}/>
          </Col>
          <Col xs={2}>
            <Card title={"ALL DAY"} img={allday}/>
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
            <Card title={"MOBILE"} img={mobile}/>
          </Col>
          <Col xs={2}>
            <Card title={"TV"} img={tv}/>
          </Col>
          <Col xs={2}>
            <Card title={"LANDLINE"} img={phone}/>
          </Col>
          <Col xs={2}>
            <Card title={"LAPTOP/PC"} img={laptop}/>
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
            <Card title={"MOVIES"} img={movie}/>
          </Col>
          <Col xs={2}>
            <Card title={"SPORTS"} img={sport}/>
          </Col>
          <Col xs={2}>
            <Card title={"TV SERIES"} img={tv}/>
          </Col>
          <Col xs={2}>
            <Card title={"NEWS"} img={news}/>
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
          <Col xs={8}><h1 style={{ fontFamily: "GT-Walsheim" }}>Great! We love sports! Which sports do you like?</h1></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: "40px" }}>
          <Col xs={2}>
            <Card title={"RUGBY UNION"} img={rugby}/>
          </Col>
          <Col xs={2}>
            <Card title={"FOOTBALL"} img={football}/>
          </Col>
          <Col xs={2}>
            <Card title={"BOXING"} img={boxing}/>
          </Col>
          <Col xs={2}>
            <Card title={"MMA"} img={mma}/>
          </Col>
          <Col xs={2}>
            <Card title={"CRICKET"} img={cricket}/>
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
            <Card title={"PHONE CALLS"} img={phone}/>
          </Col>
          <Col xs={2}>
            <Card title={"SOCIAL MEDIA"} img={socialmedia}/>
          </Col>
          <Col xs={2}>
            <Card title={"GAMING"} img={gaming}/>
          </Col>
          <Col xs={2}>
            <Card title={"STREAMING"} img={streaming}/>
          </Col>
          <Col xs={2}>
            <Card title={"CRICKET"} img={cricket}/>
          </Col>
          <Col xs={2}>
            <Card title={"TEXTING"} img={cricket}/>
          </Col>         
        </Row>
        <Row className="justify-content-center" style={{ marginTop: "40px", marginBottom: "50px" }}>
          <Col className="text-center" xs={6}>
            <Button className="bt-btn" href="/question9" variant="" type="submit">
              NEXT
            </Button>
          </Col>
        </Row>
      </Container>
      
    )
  }
};

class Question9 extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "100px" }}>
          <Col xs={8}><h1 style={{ fontFamily: "GT-Walsheim" }}>Nearly there, where do you call home?</h1></Col>
        </Row>

        <Row className="justify-content-md-center" style={{ marginTop: "40px" }}>
          <Col xs={3}>
            <Form.Control type="email" placeholder="POST CODE" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Col>
          <Col className="text-center" xs={3}>
            <Button style={{ backgroundColor: "#5514b4", color: "white", width: "100%" }} href="/map" variant="" type="submit">
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
  Question8,
  Question9 };