import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from './components/nav';
import Rules from './components/rules';
import UsedWords from './components/usedWords';
import TimeModal from './components/timeModal';
import Controls from './components/controls';
import LetterGrid from './components/letterGrid';

function App() {

  return (
    <Container fluid="true">
      <Nav/>
      <hr/>
      <Row>
        <Col md="8" className="letters-container">
          <LetterGrid/>
          <Controls/>
        </Col>
        <Col md="4">
          <UsedWords/>
          <Rules/>
        </Col>
      </Row>

      <TimeModal/>

    </Container>
  );
}


export default App;
