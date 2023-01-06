import React, { useState } from "react";
import { Form, Alert, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VscAdd } from 'react-icons/vsc'

const AddDefect = () => {
  const [addDefect, setAddDefect] = useState({
    category: "",
    description: "",
    priority: "",
    status:""
  });

  const [success, setSuccess] = useState(false);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    var randomId = new Date().getUTCMilliseconds().toString();
    // const defect_data = {
    //   username: "test_user",
    //   category: addDefect.category,
    //   description: addDefect.description,
    //   priority: addDefect.priority,
    //   id:randomId
    // };

    // console.log("defect data: ", defect_data);
    fetch("http://localhost:5000/defects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "test_user",
        category: addDefect.category,
        description: addDefect.description,
        priority: addDefect.priority,
        id:randomId,
        status:"open"
      }),
    })
      .then((res) => {
        res.json();
        console.log("data added!!", res);
        setSuccess(true)
        setTimeout(()=>{
          setSuccess(false); 
          window.location.reload(true);
        } , 3000)
        
      })
      .catch((err) => {
        console.log("error: ", err.message);
      });
    // try {
    //   console.log("assign proj called");
    //   const res = await fetch("", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({username:"test_user", category:addDefect.category, description:addDefect.description, priority:addDefect.priority}),
    //   });

    //   console.log("worked till here...");

    //   const data = await res.json();
    //   console.log("data recieved: ",data);

    // } catch (error) {
    //   console.log("assigning project error: ", error);
    // }

    //   const requestOptions={
    //     'method':'POST',
    //     'body':JSON.stringify(defect_data),
    //     'headers':{"Content-type":"application/json"}

    // }
    // const data = await fetch(`http://localhost:5000/defects`, requestOptions)
    // const response = await data.json();
    // console.log(response);
    //navigate("/todos")
  };

  const changeHandler = (e) => {
    setAddDefect({ ...addDefect, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-5 add-defect">
       {
          success &&  <Alert variant="success">
            Defect added successfully..!!
        </Alert>
      }
      <div
        className="card border-0 shadow p-3 mx-auto"
        style={{ width: "30rem" }}
      >
        <Form>
          <h3 className="form-header nav-background">Add Defects</h3>
          <div className="form-group ">
            <Form.Label>Defect Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={changeHandler}
              name="category"
              value={addDefect.category}
            >
              <option>---Select---</option>
              <option value="UI">UI</option>
              <option value="Functional">Functional </option>
              <option value="Change Request">Change Request</option>
            </Form.Select>
          </div>

          <br />
          <div className="form-group">
            <Form.Label htmlFor="description">Defect Description: </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Your Description"
              name="description"
              rows={3}
              value={addDefect.description}
              onChange={changeHandler}
            />
          </div>
          <br />

          <div className="form-group ">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={changeHandler}
              name="priority"
              value={addDefect.priority}
            >
              <option>---Select---</option>
              <option value="1">1</option>
              <option value="2">2 </option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>
          </div>
          <br />
          <Row>
            <Col lg={4} md={4} sm = {2}>
                <button
                className="button btn btn-primary"
                type="submit"
                onClick={(e) => onFormSubmit(e)}
                style={{color:'white'}}
              >
                <VscAdd style={{color:'white', fontSize:'1rem'}}/> Defect
              </button>
            </Col>
            <Col>
                <Link to="/view">
                   <button className="button btn btn-warning" variant="success" >View Defects</button>
                </Link>
            </Col>
          </Row>
        </Form>
      </div>
     
     
    </div>
  );
};

export default AddDefect;
