import React, {useState} from 'react'
import {Card, Col, Row} from "antd"
import './styles/home.css'
import Register from "./Register.js"
import Login from './Login';

const tabList = [
  {
    key: 'Login',
    tab: 'Login',
  },
  {
    key: 'Register',
    tab: 'Register',
  },
];

const contentList = {
  Login: <Login />,
  Register: <Register />,
};

const Home = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('Login');

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
   <div>
    <Row className='homeBlock' gutter={[8,8]}>
      <Col span={10}>
          <Card
          className='homeCard'
          title="Notes App"
          tabList={tabList}
          activeTabKey={activeTabKey1}
          onTabChange={onTab1Change}
        >
          {contentList[activeTabKey1]}
        </Card>
      </Col>
    </Row>
   </div>
  )
}

export default Home