import React from 'react';

import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux';
import { addletter, addKey, 
  resetLetter, resetKey } from '../actions';

function LetterGrid() {
  const letters = useSelector(state => state.lettersReducer);
  const wordKey = useSelector(state => state.wordKeyReducer);
  
  const dispatch = useDispatch();
  return (
    <div className="letters-blocks">
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
  );
}


export default LetterGrid;