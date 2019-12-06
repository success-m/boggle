import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Nav from './components/nav';
import Rules from './components/rules';

import {useSelector, useDispatch} from 'react-redux';
import {increment, descrement, letters} from './actions';


function App() {
  const counter = useSelector(state => state.counterReducer);
  const letters = useSelector(state => state.lettersReducer);
  
  const dispatch = useDispatch();
  return (
    <Container fluid="true">
      <Nav></Nav>
      <hr/>
      <Row>
        <Col md="8" className="letters-container"><div className="letters-blocks">
          {
            letters.map((letterArray, index) => (
            <div key={"a"+index}>{
              letterArray.map((letter, index) => (
                <Button className="letter" variant="outline-info" key={"b"+index}>{letter.toUpperCase()}</Button>
              ))
            }</div>
            ))
          }</div>

         <Button variant="outline-success" onClick={ (e) => {
            dispatch(increment(3));
            console.log(e);
          } }>Submit</Button>
          <Button variant="outline-danger" onClick={ (e) => {
            dispatch(descrement())
          console.log(e);
        } }>
            Cancel
          </Button>
        </Col>
        <Col md="4">
          <Rules></Rules>
        </Col>
      </Row>
    </Container>
  );
}


export default App;
