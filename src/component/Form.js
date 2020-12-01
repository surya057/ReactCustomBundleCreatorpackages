import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const btReactForm = () => (
    <div className="container mt-auto p-5">
<div className="d-flex align-items-center justify-content-center">
    <Card className="shadow-lg" style={{ width: '24rem' }}>
  <Card.Body>
    <Card.Title>Login</Card.Title>
    <Card.Text>

<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button href="/plansPage" className="bt-color" variant="" type="submit">
    Submit
  </Button>
</Form>
</Card.Text>
</Card.Body>
</Card>
</div>
</div>
);

export default btReactForm;