import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
import logo from '../assets/logo.svg';


export default class NavigationBar extends Component {
  render() {
    return (
        
      <Navbar className="justify-content-between" style={{ backgroundColor: "#5514B4"}} variant="light">
      <Navbar.Brand style={{ marginLeft: "250px" }}href="/" fixed="top"><img
        src={logo}
        width="50px"
        height="50px"
        className="d-inline-block align-top"
        alt="bt logo"
      /></Navbar.Brand>
      </Navbar>
  );
  }
};

