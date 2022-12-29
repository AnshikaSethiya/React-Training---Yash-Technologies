import React from 'react'

import { Button, Card } from 'react-bootstrap'

const SingleProduct = ({ prod }) => {

    return (

        <div className='products'>

            <Card style={{ width: '18rem' }}>

                <Card.Img variant="top" src={prod.image}  width='20%' height='40%' />

                <Card.Body>

                    <Card.Title>{prod.productName}</Card.Title>
                    <Card.Subtitle>
                        <span>{prod.price}</span>
                        {prod.fastDelivery?(<div>Fast Delivery</div>):(<div>In 4 days</div>)}

                    </Card.Subtitle>
                    <Button variant="primary">Add to cart</Button>{'  '}
                    <Button variant="danger">Remove from cart</Button>{'  '}
                </Card.Body>

            </Card>

        </div>

    )

}



export default SingleProduct