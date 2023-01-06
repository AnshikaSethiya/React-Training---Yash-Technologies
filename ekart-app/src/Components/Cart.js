import React, { useContext, useEffect, useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import Context from "../Context/Context";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const data = useContext(Context);
  const cart = data.state.cart;
  const dispatch = data.dispatch;
  const [total, setTotal] = useState(32);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  });

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => {
            return (
              <ListGroupItem key={prod.id}>
                <Row>
                  <Col>
                    <Image src={prod.image} fluid rounded />
                  </Col>

                  <Col>
                    <span>{prod.productName}</span>
                  </Col>

                  <Col>
                    <span>{prod.price}</span>
                  </Col>

                  <Col>
                    <Rating rating={prod.rating} />
                  </Col>

                  <Col>
                    <Form.Control
                      as="select"
                      value={prod.qty}
                      onChange={(e) => {
                        dispatch({
                          type: "CHANGE_CART_ITEM_QTY",
                          payload: { id: prod.id, qty: e.target.value },
                        });
                      }}
                    >
                      {[...Array(10)].map((_, index) => {
                        return <option key={index + 1}>{index + 1}</option>;
                      })}
                    </Form.Control>
                  </Col>

                  <Col>
                    <Button
                      variant="light"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod.id,
                        });
                      }}
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>

      <div className="filters summary">
        <span className="title">Subtotal {cart.length} items</span>

        <span style={{ fontSize: 20, fontFamily: "monospace" }}>
          Total is {total}
        </span>
      </div>
    </div>
  );
};

export default Cart;
