import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <Container fluid="true">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Boggle</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Score: 0
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <hr/>
      <Row>
        <Col md="8">box goes here</Col>
        <Col md="2">
          <Card>
            <Card.Header as="h5">Rules</Card.Header>
            <Card.Body>
              <Card.Title>For The Game</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
