import React from "react";
import logo from './images/logo.svg'
import { Row, Col, Button } from "react-bootstrap";

const Header = () => {

  const user = sessionStorage.getItem("authenticatedUser")
  console.log("username:  ", user)
  return (
    <div className = "header nav-background shadow-sm p-3 mb-5">
      <Row>
            <Col lg ={11} xm ={11} sm={11}>
            <h2 ><img src = {logo} alt = "logo" height = "50px" width = "120px"/>Defect Tracker </h2>
            </Col>
            {
              user ? <Col><Button>Logout</Button></Col>
              :
              <></>
            }
      </Row>
    </div>
  );
}

export default Header;
