import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useSelector, useDispatch} from 'react-redux';
import {restartGame} from '../middleware.js';

function TimeModal() {
  const timerEnd = useSelector(state => state.modalReducer);
  const counter = useSelector(state => state.counterReducer);
  
  const dispatch = useDispatch();
  return (
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
          <Button variant="info" onClick={ () => {
            dispatch(restartGame());
          } }>
            Restart
          </Button>
        </Modal.Footer>
      </Modal>
  );
}


export default TimeModal;