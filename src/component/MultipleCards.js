import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const multiCard = () => (
<div className="container mt-auto p-5">
<CardColumns>
  <Card>
    <Card.Body>
      <Card.Title>Save on an upgrade to BT Halo. Our Black Friday treat.</Card.Title>
      <Card.Text>
      You’ll get an inclusive annual tech check from our Home Tech Experts and a 4G Mini Hub to get back online if your broadband goes down.
      </Card.Text>
      <Button className="bt-color" variant="">Upgrade your calling plan</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Using your home phone more than you used to? </Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button className="bt-color" variant="">Upgrade your calling plan</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Black Friday SIM Only sale</Card.Title>
      <Card.Text>
      Our SIM Only prices have never been lower plus grab double data on selected SIM Only plans.
      </Card.Text>
      <Button className="bt-color" variant="">See sim only deals</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>All TV packages half price for three months</Card.Title>
      <Card.Text>
      In our biggest-ever Black Friday sale, Includes the Sky channels from NOW TV. Ends 3 December. 
      </Card.Text>
      <Button className="bt-color" variant="">Switch your TV package</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Using your home phone more than you used to? </Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button className="bt-color" variant="">Upgrade your calling plan</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>All TV packages half price for three months</Card.Title>
      <Card.Text>
      In our biggest-ever Black Friday sale, Includes the Sky channels from NOW TV. Ends 3 December. 
      </Card.Text>
      <Button className="bt-color" variant="">Switch your TV package</Button>
    </Card.Body>
  </Card>
</CardColumns>
</div>
);

export default multiCard;