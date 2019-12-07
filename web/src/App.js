import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import Nav from './components/nav';
import Rules from './components/rules';

import {useSelector, useDispatch} from 'react-redux';
import {increment, resetScore, letters, 
  addletter, addKey, 
  resetLetter, resetKey,
  resetAlert,resetwords} from './actions';
import {getScore, getLetters, 
  initTimer, restartGame} from './middleware.js';

function App() {

  const counter = useSelector(state => state.counterReducer);
  const letters = useSelector(state => state.lettersReducer);
  const word = useSelector(state => state.wordReducer);
  const wordKey = useSelector(state => state.wordKeyReducer);
  const alert = useSelector(state => state.alertReducer);
  const timerEnd = useSelector(state => state.modalReducer);
  
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
         <Button className="game-controls" variant="outline-success" onClick={ () => {
            dispatch(getScore(word));
          } }>Submit</Button>
          <Button className="game-controls" variant="outline-warning" onClick={ () => {
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
          <Button className="game-controls" variant="outline-danger" onClick={ () => {
            dispatch(restartGame());
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

      <Modal show={timerEnd["display"]}>
        <Modal.Header>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>
          <Modal.Body className="final-message">
          Your three minute time is over.{counter>4?' Well Played!':''} <br/>
          {timerEnd["message"]}
          <span className="final-score">
            {counter}
          </span>
          </Modal.Body>
        <Modal.Footer>
          <p>
            Wanna try again? 
          </p>
          <Button variant="primary" onClick={ () => {
            dispatch(restartGame());
          } }>
            Restart
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
}


export default App;
