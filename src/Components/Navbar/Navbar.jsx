import React from 'react'
import {Navbar,NavDropdown,Nav,Container,Badge} from 'react-bootstrap'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import ProductDetail from '../Product/ProductDetail'
const NavBar = () => {
  const cartno=useSelector(state=>state.shop.cart)
  return (
    <>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand><Link to='/' style={{textDecoration:'none'}}><h1 style={{fontWeight:'999'}}>FakeCart</h1></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav style={{marginLeft:'50rem'}}>
        <NavDropdown  title={<AiOutlineShoppingCart/>} id="basic-nav-dropdown">
        
          <NavDropdown.Item style={{width:'25rem'}} className='nav-check'><ProductDetail/></NavDropdown.Item>
        </NavDropdown>
        <Badge bg="secondary" style={{height:'2.5vh',width:'2.5rem'}}>{cartno.length}</Badge>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default NavBar