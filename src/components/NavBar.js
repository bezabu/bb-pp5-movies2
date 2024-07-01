import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import film_logo from '../assets/film_logo.png'
import styles from '../styles/NavBar.module.css'
import  NavLink  from 'react-router-dom/NavLink'
import { CurrentUserContext } from '../App'

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext)
  const loggedInIcons = <>{currentUser?.username}</>
  const loggedOutIcons = <>
  <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin"><i class="fa-solid fa-right-to-bracket"></i>Sign in</NavLink>
  <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup"><i class="fa-solid fa-user-plus"></i>Sign up</NavLink>
  </>
  return (
    <Navbar className={styles.NavBar} bg="light" expand="md" fixed="top">
<NavLink to="/">
  <Navbar.Brand><Container><img src={film_logo} alt="film logo" height="50"/><h1>Movie Reviews</h1></Container></Navbar.Brand>
  </NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-left">
      <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/"><i class="fa-solid fa-house"></i>Home</NavLink>
      {currentUser ? loggedInIcons : loggedOutIcons}
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar