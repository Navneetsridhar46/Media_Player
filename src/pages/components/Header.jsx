import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar style={{border:'none'}} className="bg-danger">
    <Container>
      <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className='fw-bolder d-flex align-items-center' style={{color:'white',fontFamily:' "Sixtyfour", sans-serif;'}}>
          <i class="fa-solid fa-play me-2"></i>{' '}
            MX PLAYER
          </Navbar.Brand>
      </Link>
    </Container>
  </Navbar>
  )
}

export default Header