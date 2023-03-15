import React from 'react'
import { Divider, Row, Col } from "antd"

const Grid = () => {
  return (
    <div>
       <Divider>Column span 24</Divider>
       <Row>
            <Col lg={24} md={24} style={{backgroundColor:"green", color:"white"}}>Column1</Col>
        </Row>

        <Divider>Column span 12</Divider>
        <Row gutter={[16,16]}>
            <Col lg={12} md={12}><div style={{backgroundColor:"green", color:"white"}}>Column1</div></Col>
            <Col lg={12} md={12}><div style={{backgroundColor:"green", color:"white"}}>Column2</div></Col>
        </Row>


        <Divider>Column span 8</Divider>
       <Row gutter={[8,8]}>
            <Col lg={8} md={8}><div style={{backgroundColor:"green", color:"white"}}>Column1</div></Col>
            <Col lg={8} md={8}><div style={{backgroundColor:"green", color:"white"}}>Column2 </div></Col>
            <Col lg={8} md={8}><div style={{backgroundColor:"green", color:"white"}}>Column3 </div></Col>
        </Row>


       <Divider>Column span 6</Divider>
       <Row gutter={[6,6]}>
            <Col lg={6} md={6}><div style={{backgroundColor:"green", color:"white"}}>Column1</div></Col>
            <Col lg={6} md={6}><div style={{backgroundColor:"green", color:"white"}}>Column2</div></Col>
            <Col lg={6} md={6}><div style={{backgroundColor:"green", color:"white"}}>Column3</div></Col>
            <Col lg={6} md={6}><div style={{backgroundColor:"green", color:"white"}}>Column4</div></Col>
        </Row>

    </div>   
  )
}

export default Grid