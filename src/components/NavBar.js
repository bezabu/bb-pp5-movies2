import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import film_logo from '../assets/film_logo.png'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} bg="light" expand="md" fixed="top">
  <Navbar.Brand><Container><img src={film_logo} alt="film logo" height="50"/><h1>Movie Reviews</h1></Container></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-left">
      <Nav.Link><i class="fa-solid fa-house"></i>Home</Nav.Link>
      <Nav.Link><i class="fa-solid fa-right-to-bracket"></i>Sign in</Nav.Link>
      <Nav.Link><i class="fa-solid fa-user-plus"></i>Sign up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar