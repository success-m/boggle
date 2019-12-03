import React from 'react';
import Card from 'react-bootstrap/Card';

function Rules() {
	return (
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
        );
}


export default Rules;