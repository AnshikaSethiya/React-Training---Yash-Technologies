import React from 'react'
import { Badge, Dropdown, DropdownButton, FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" style={{height:'50px'}}>
                <Container>
                    <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
                    <Navbar.Text className='search'>
                        <FormControl style={{ width: 500 }} placeholder='search for a product' />
                    </Navbar.Text>

                    <Nav className="me-auto">
                        <Dropdown alignRight>
                            <Dropdown.Toggle variant="success">
                                   <FaShoppingCart color="white" fontSize="22px"></FaShoppingCart>
                                   <Badge>{3}</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                This is all items in cart
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>

        </div>

    )
}

export default Header