import { Form, Col, Input, Button } from "antd";
import {LoginOutlined } from "@ant-design/icons"
import React, {useState, useContext, useEffect} from "react";
import { NotesContext } from "../Context/context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginForm] = Form.useForm();

  const navigate = useNavigate();
  const notesContext = useContext(NotesContext)

  useEffect(() => {
    notesContext.fetchUsers();
  }, [])
  
  const onFinishLogin = (values) => {
    notesContext.userList.map((item) => {
        if(item.username == values.username && item.password == values.password){
          navigate("/notes")
        }else{
          window.alert("Incorrect username or password!!")
        }
    })
  }

  return (
    <div>
      <Col>
        <Form layout="vertical" name="loginForm" form={loginForm} onFinish={onFinishLogin} autoComplete="off">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Please input your Username"/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Please input your Password"/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" size="large" icon={<LoginOutlined />}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </div>
  );
};

export default Login;
