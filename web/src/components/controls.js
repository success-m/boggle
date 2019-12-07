import React from 'react';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import {useSelector, useDispatch} from 'react-redux';
import {  resetLetter, resetKey,
  resetAlert} from '../actions';
import {getScore, restartGame} from '../middleware.js';

function Controls() {
  const word = useSelector(state => state.wordReducer);
  const alert = useSelector(state => state.alertReducer);
  
  const dispatch = useDispatch();
  return (
    <div>
          <p><u>Your Word:</u> {word}</p>
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
            }));
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
    </div>
  );
}


export default Controls;