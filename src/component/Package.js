
import '../Packagepage.css';
import Increment from './Increment';
import Range from './Range';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import mobile from '../assets/mobile.png';
import image1 from '../assets/image 1.png';
import image2 from '../assets/image 2.png';
import image3 from '../assets/image 3.png';
import image4 from '../assets/image 4.png';
import image5 from '../assets/image 5.png';

const btReactForm = () => (
<div className="container mt-auto p-5">
<h1 class="heading" style={{ fontFamily: "GT-Walsheim" }}>Fraser, here is your tailored <br/> package</h1><br/>
    <p class="recommend">We recommend:</p>
<div sm={3} className="d-flex align-items-center justify-content-center">
<div class="custom-card">
<div class="custom-container top custom-center ">
    <h2><b>£43.29</b></h2> 
    <p>per month</p> 
  </div>
  <div class="custom-container bottom">
    <h3>67</h3><span class="mb-class">Mb</span>
    <p class="recommend"><span >Unlimited data</span> <br/>across all devices</p>
   <button class="button">Buy Today</button>
  </div>
</div>
</div>
<div>
<Container style={{ textAlign: "center"}}>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "30px" }}>
          <Col xs={8}><span class="small-text">Includes</span></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: "10px" }}>
          
          
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={mobile} alt="day"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>MOBILE</p>
                </Col>
              </Row>
            </Container>
            <div  className="question-increment increment-position"><Increment/></div>
            
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={mobile} alt="night"></img>
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
                  <img style={{ height: "64px", marginTop: "30px" }} src={mobile} alt="allday"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>BROADBAND</p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "20px" }}>
          <Col xs={8}><span class="small-text">Internet Speed</span></Col><br/>
        </Row>
        <div  className="big-counter increment-position"><Increment/></div>
        <span class="small-text">RECOMMENDED</span>

        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "30px" }}>
          <Col xs={8}><span class="small-text">TV Pacakges</span></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: "10px" }}>
          
          
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "26px", marginTop: "64px" }} src={image2} alt="day"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>DISNEY+</p>
                </Col>
              </Row>
            </Container>
            <div  className="question-increment increment-position"><Increment/></div>
            
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={image1} alt="night"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>NETFLIX</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={2}>
            <Container className="sqCard d-flex justify-content-center">
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <img style={{ height: "64px", marginTop: "30px" }} src={image3} alt="allday"></img>
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
                  <img style={{ height: "39px", marginTop: "55px" }} src={image4} alt="allday"></img>
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
                  <img style={{ height: "35px", marginTop: "59px" }} src={image5} alt="allday"></img>
                </Col>
                <Col xs={12} style={{ textAlign: "center", marginTop: "15px" }}>
                  <p style={{ marginBottom: "30px" }}>BOXING</p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ textAlign: "center", marginTop: "70px" }}>
          <Col xs={8}><span class="">Adjust mobile data usage</span></Col>
        </Row>
        <Range/>
      </Container>
      

</div>
</div>
);

export default btReactForm;