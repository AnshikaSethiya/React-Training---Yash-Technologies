import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="body_wrapper">
        <div className="wrapper">
          <div className="card">
             <h1 className="card__title">Sign up for free</h1>
              <Button>Sign up with Google</Button>
              <h3 class="card__head">or sign up with email </h3>
              <Form className="card__form">
              <div class="input-group">
                  <input type="email" name="email" id="email" required />
                  <label class="label" for="email">Enter Email</label>
					    </div>

              <div class="input-group">
						    <input type="password" name="password" id="password" required />
						    <label class="label" for="password">Enter Password</label>
					    </div>
              </Form>
          </div>
      </div>
    </div>
  );
};

export default Signup;
