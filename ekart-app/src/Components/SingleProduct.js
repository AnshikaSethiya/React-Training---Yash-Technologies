import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import Context from "./../Context/Context";

const SingleProduct = ({ prod }) => {
  const data = useContext(Context);
  const cart = data.state.cart;
  const dispatch = data.dispatch;
  return (
    <div className='products'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.image} width='20%' height='40%' />
        <Card.Body>
            <Card.Title>{prod.productName}</Card.Title>
            <Card.Subtitle>
                <span>{prod.price}</span>
                {prod.fastDelivery ? (<div>Fast Delivery</div>) : (<div>In 4 days</div>)}
            </Card.Subtitle>
            
            {cart.some((p) => p.id === prod.id) ? (
                <Button variant="danger" onClick={() => {

                    dispatch({ type: 'REMOVE_FROM_CART', payload: prod.id })
                }}>Remove from cart</Button>
            ) : (
                <Button  disabled={prod.inStock==1} variant={prod.inStock==1?'warning':'primary'} onClick={() => { dispatch({ type: 'ADD_TO_CART', payload: prod }); }}>
                    {prod.inStock==1?'Out of Stock':'Add to Cart'}</Button>    
            )}

            {'  '}
        </Card.Body>
    </Card>
</div>
  );
};

export default SingleProduct;
