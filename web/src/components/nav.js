import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import {useSelector} from 'react-redux';

function Nav() {
  const counter = useSelector(state => state.counterReducer);
  const timer = useSelector(state => state.timeReducer);

  return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Boggle</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="timer">
            Time: { ('0' + Math.floor(timer / 60).toString()).slice(-2) }
            :{ ('0' + (timer - Math.floor(timer / 60) * 60).toString()).slice(-2) }
          </Navbar.Text>
          <Navbar.Text>
            Score: {counter}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Nav;
