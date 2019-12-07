import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Nav from './components/nav';
import Rules from './components/rules';

import {useSelector, useDispatch} from 'react-redux';
import {increment, resetScore, letters, 
  addletter, addKey, 
  resetLetter, resetKey,
  resetAlert,resetwords} from './actions';
import {getScore, getLetters, initTimer} from './middleware.js';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const letters = useSelector(state => state.lettersReducer);
  const word = useSelector(state => state.wordReducer);
  const wordKey = useSelector(state => state.wordKeyReducer);
  const alert = useSelector(state => state.alertReducer);
  
  const dispatch = useDispatch();
  return (
    <Container fluid="true">
      <Nav></Nav>
      <hr/>
      <Row>
        <Col md="8" className="letters-container"><div className="letters-blocks">
          {
            letters.map((letterArray, i) => (
            <div key={"a"+i}>{
              letterArray.map((letter, index) => (
                <Button className={wordKey.includes(i+'b'+index)?'letter active':'letter'} variant="outline-info" key={i+"b"+index}
                onClick = { () => {
                  if(wordKey.includes(i+'b'+index)){
                    dispatch(resetLetter());
                    dispatch(resetKey());
                  }
                  else {
                    dispatch(addletter(letter));
                    dispatch(addKey([i+"b"+index]));  
                  }
                }}
                >{letter.toUpperCase()}</Button>
              ))
            }</div>
            ))
          }</div>
          <p>Your Word: {word}</p>
         <Button variant="outline-success" onClick={ () => {
            dispatch(getScore(word));
          } }>Submit</Button>
          <Button variant="outline-warning" onClick={ () => {
            dispatch(resetLetter());
            dispatch(resetKey());
            dispatch(resetAlert({
              display: false,
              variant: "",
              message: ""
            }))
          } }>
            Cancel
          </Button>
          <Button variant="outline-danger" onClick={ () => {
            dispatch(resetLetter());
            dispatch(resetKey());
            dispatch(resetScore());
            dispatch(getLetters());
            dispatch(resetwords());
            dispatch(resetAlert({
              display: false,
              variant: "",
              message: ""
            }));
            dispatch(initTimer());
          } }>
            Restart
          </Button>
          <hr/>
          <Alert variant={alert["variant"]} isOpen={alert["display"]} >
            {alert["message"]}
          </Alert>
        </Col>
        <Col md="4">
          <Rules></Rules>
        </Col>
      </Row>
    </Container>
  );
}


export default App;
