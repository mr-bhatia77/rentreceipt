import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'

const Navibar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >Rent Reciepts </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link target='_blank' href="https://www.linkedin.com/in/bharat-bhatia-a86a14a7">Developed with <i class="fab fa-gratipay"></i>  by Bharat Bhatia, Let's Connect ? <i style={{backgroundColor:'blue',color:'white',padding:'5px'}} class="fab fa-linkedin-in"></i></Nav.Link>
            
          </Nav>
          </Navbar>
      </>
    )
}

export default Navibar
