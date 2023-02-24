import { Col, Row, Form, Input, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import React, {useState} from "react";

const Register = () => {
  const [registerForm] = Form.useForm();


  const onFinishRegister = ( values) => {
    const randomNumber = parseInt(Math.random() * 1000);
    console.log(values);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
        name:values.name,
        id: randomNumber
      }),
    })
      .then((res) => {
        res.json();
        console.log("data added!!", res);
        
      })
      .catch((err) => {
        console.log("error: ", err.message);
      });
  };

  return (
    <div>
      <Col>
        <Form
          layout="vertical"
          name="registerForm"
          form={registerForm}
          onFinish={onFinishRegister}
          autoComplete="off"
        >
          <Form.Item name="id">
            <Input type="hidden" />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input placeholder=" Please input your Name" />
          </Form.Item>

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
            <Input placeholder="Please input your Username" />
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
            <Input.Password placeholder="Please input your Password" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 18,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              icon={<LoginOutlined />}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </div>
  );
};

export default Register;
