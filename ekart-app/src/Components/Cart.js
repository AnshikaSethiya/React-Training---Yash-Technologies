import React, { useContext, useEffect, useState } from 'react'
import { ListGroup, ListGroupItem, Col, Row, Image } from 'react-bootstrap'
import Context from '../Context/Context'
import Rating from './Rating'

const Cart = () => {
    const data = useContext(Context)
    const cart = data.state.cart
    const [total, setTotal] = useState(32)

    useEffect(() => {
      setTotal(cart.reduce((acc, curr) => acc+Number(curr.price) * curr.qty, 0))
    }, [])
    
  return (
    <div className='home'>
        <div className='productContainer'>
            <ListGroup>
                    {
                        cart.map((prod) => {
                            return <ListGroupItem key={prod.id}>
                                <Row>
                                    <Col><Image src={prod.image} fluid rounded/></Col>
                                    <Col><span>{prod.productName}</span></Col>
                                    <Col><span>{prod.price}</span></Col>
                                    <Col><Rating rating={prod.rating}/></Col>
                                    <Col></Col>
                                </Row>
                            </ListGroupItem>
                        })
                    }
            </ListGroup>
        </div>
        <div className='filters summary'>
            <span className='title'>Subtotal {cart.length} items</span>
            <span style={{fontSize:'1rem', fontFamily:'monospace'}}>Total is {total}</span>
        </div>
    </div>
  )
}

export default Cart