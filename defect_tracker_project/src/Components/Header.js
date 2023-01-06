import React from "react";
import logo from './images/logo.svg'
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const user = sessionStorage.getItem("username")

  const logout = () => {
    sessionStorage.removeItem("username");
    navigate("/")
  }

  return (
    <div className = "header nav-background shadow-sm p-3 mb-5">
      <Row>
            <Col lg ={10} md={8} xm ={11} sm={8}>
            <h2 ><img src = {logo} alt = "logo" height = "50px" width = "120px"/>Defect Tracker </h2>
            </Col>
            {
              user ? <Col lg={2} md={2} sm={2}><Button variant="light" onClick={() => logout()}>Logout</Button></Col>
              :
              <></>
            }
      </Row>
    </div>
  );
}

export default Header;
