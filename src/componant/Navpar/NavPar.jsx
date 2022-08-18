import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'
import logo from "../../imegs/logo.png"
export default function NavPar() {
  return <>
  <Navbar  expand="lg" >
      <Container>
        <Navbar.Brand >
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto px-5 me-5">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >About us</Nav.Link>
            <Nav.Link >Explore Foods</Nav.Link>
            <Nav.Link >Reviews</Nav.Link>
            <Nav.Link >FAQ</Nav.Link>
            <Nav>
          <Nav.Link id='lastNav' className=' px-4 mx-4'>253 647 85</Nav.Link>
            
          </Nav>
          </Nav>
         
         

        </Navbar.Collapse>
      </Container>
    </Navbar>
       
      
  
  </>

  
}
