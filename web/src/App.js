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
        <Col md="4">
          <Card>
            <Card.Header as="h5">Rules</Card.Header>
            <Card.Body>
              <Card.Title>Please follow the steps below.</Card.Title>
              <Card.Text>
                <ul>
                  <li>Click on the letters to form a word.</li>
                  <li>3 or 4 letter word gets 1 point.</li>
                  <li>5 letter word gets 2 points.</li>
                  <li>6 letter word gets 3 points.</li>
                  <li>7 letter word gets 4 points.</li>
                  <li>8 or more letter word gets 11 points.</li>
                  <li>The letters cannot be clicked twice. If clicked, the word will be reset.</li>
                  <li>Once the word is complete click on submit.</li>
                  <li>To reset the word click on reset.</li>
                  <li>There will be a 3 minute time for the round.</li>
                  <li>To restart the game, click on restart.</li>
                </ul>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
