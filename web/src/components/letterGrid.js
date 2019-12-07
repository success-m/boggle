import React from 'react';

import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux';
import { addletter, addKey, updateAlert, resetAlert, 
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
                  if(wordKey.length){
                    let lastKey = wordKey[wordKey.length -1];

                    let validKeys = [];
                    let parent = 0;
                    let child = 0;
                    for (parent = i -1 ; parent <= i+1; parent++) {
                      for (child = index -1 ; child <= index+1; child++) {
                        validKeys.push(parent + "b" + child);
                      }
                    }

                    if(!validKeys.includes(lastKey)){
                      dispatch(resetLetter());
                      dispatch(resetKey());

                      clearTimeout(window.alertTimeout);

                      dispatch(updateAlert({
                        display: true,
                        variant: "danger",
                        message: "Oops, letters must be adjoining in a 'chain'."
                      }));

                      window.alertTimeout = setTimeout(() => {
                        dispatch(resetAlert({
                          display: false,
                          variant: "",
                          message: ""
                        }));
                      } , 2000);

                      return false;
                    }
                    

                  }

                  if(wordKey.includes(i+'b'+index)){
                    dispatch(resetLetter());
                    dispatch(resetKey());

                    clearTimeout(window.alertTimeout);

                    dispatch(updateAlert({
                      display: true,
                      variant: "danger",
                      message: "Oops, No letter cube may be used more than once within a single word.."
                    }));

                    window.alertTimeout = setTimeout(() => {
                      dispatch(resetAlert({
                        display: false,
                        variant: "",
                        message: ""
                      }));
                    } , 2000);
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