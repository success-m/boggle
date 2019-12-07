import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'

import {useSelector} from 'react-redux';

function UsedWords() {
  const words = useSelector(state => state.addedWordsReducer);

  return (
    <div>
		  <Card className={words.length?"show":"hide"} >
            <Card.Header as="h5">Word{words.length>1?"s":""} Used</Card.Header>
            <Card.Body>
              <Card.Text>
                 {words.map((word) => (
                    <Badge variant="light">{word.charAt(0).toUpperCase() + word.slice(1)}</Badge>

                  ))}
                 
          
              </Card.Text>
            </Card.Body>
    </Card>
    </div>
  );
}


export default UsedWords;