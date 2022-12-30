import React, { useContext } from 'react'
import { Badge, Button, Dropdown, DropdownButton, FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaShoppingCart} from 'react-icons/fa'
import Context from '../Context/Context';
import {AiFillDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
    const data = useContext(Context)
    const cart = data.state.cart
    const dispatch = data.dispatch
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
                                   <Badge>{cart.length}</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{minWidth:270}}>
                                <>
                                {
                                    cart.map((prod) => (
                                        <span className='cartitem' key={prod.id}>
                                            <img src = {prod.image} className='cartItemImg'/>
                                            <div className='cartItemDetail'>
                                                <span>{prod.name}</span>
                                                <span>{prod.price}</span>
                                            </div>
                                            <AiFillDelete fontSize='1rem' style={{cursor:'pointer'}}
                                                onClick={() => dispatch({type:'REMOVE_FROM_CART', payload:prod.id})}/>
                                        </span>
                                    ))
                                }
                                <Link to="/cart">
                                    <Button style={{width:'95%', margin:'2 10px'}} >Go To Cart</Button>
                                </Link>
                                </>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>

        </div>

    )
}

export default Header