import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

import {useSelector, useDispatch} from 'react-redux';
import {increment, descrement} from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <Container fluid="true">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Boggle</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Score: {counter}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <hr/>
      <Row>
        <Col md="8">
          <button onClick={ (e) => {
            dispatch(increment(3));
            console.log(e);
          } }>+</button>
          <button onClick={ () => dispatch(descrement()) }>-</button>
        </Col>
        <Col md="4">
          <Card>
            <Card.Header as="h5">Rules</Card.Header>
            <Card.Body>
              <Card.Title>Please follow the steps below.</Card.Title>
              <Card.Text>
                 Click on the letters to form a word.<br/>
                 3 or 4 letter word gets 1 point.<br/>
                 5 letter word gets 2 points.<br/>
                 6 letter word gets 3 points.<br/>
                 7 letter word gets 4 points.<br/>
                 8 or more letter word gets 11 points.<br/>
                 The letters cannot be clicked twice. If clicked, the word will be reset.<br/>
                 Once the word is complete click on submit.<br/>
                 To reset the word click on reset.<br/>
                 There will be a 3 minute time for the round.<br/>
                 To restart the game, click on restart.
          
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
