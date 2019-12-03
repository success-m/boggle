import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import {useSelector} from 'react-redux';

function Nav() {
  const counter = useSelector(state => state.counterReducer);
  return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Boggle</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Score: {counter}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Nav;
