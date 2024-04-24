import React, { useState } from "react";

const ValidForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    address: "",
  });

  const [errors, setError] = useState({});
  const [buttonDisable, setButtonDisable] = useState(false);

  const validateEmail = (value) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(value).toLowerCase());
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({ ...prevData, [name]: value }));
  };

  const ValidateValues = (values) => {
    const Formerror = {};
    console.log("values", formValues);

    if (!values.firstName) {
      Formerror.firstName = "First Name is Required!!";
    } else if (values.firstName.length < 3) {
      Formerror.firstName = "Not a Valid Name!!";
    }
    if (!values.lastName) {
      Formerror.lastName = "Last Name is Required!!";
    } else if (values.lastName.length < 3) {
      Formerror.lastName = "Last Name Too Short!!";
    }
    if (!values.email) {
      Formerror.email = "Email is Required!!";
    } else if (!validateEmail(values.email)) {
      Formerror.email = "Invalid Email!!";
    }

    if (!values.dob) {
      Formerror.dob = "Date of Birth is required!!";
    }

    if (!values.address) {
      Formerror.address = "Address is Required!!";
    }

    if (!values.gender) {
      Formerror.gender = "Gender is Reqired!!";
    }

    return Formerror;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("data received is: ", formValues);
    setError(ValidateValues(formValues));
  };

  return (
    <div>
      <h2>React Form With Validation</h2>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              className="input-form"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              value={formValues.firstName}
              onChange={onHandleChange}
            />
            <p className="errorText">{errors.firstName}</p>
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
              className="input-form"
              type="text"
              name="lastName"
              id="lastName"
              value={formValues.lastName}
              placeholder="Enter last name"
              onChange={onHandleChange}
            />
            <p className="errorText">{errors.lastName}</p>
          </div>
          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="input-form"
              value={formValues.dob}
              onChange={onHandleChange}
            />
            <p className="errorText">{errors.dob}</p>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="input-form"
              type="text"
              value={formValues.email}
              id="email"
              name="email"
              placeholder="Enter email"
              onChange={onHandleChange}
            />
          </div>
          <p className="errorText">{errors.email}</p>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              className="input-form"
              id="gender"
              name="gender"
              value={formValues.gender}
              onChange={onHandleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p className="errorText">{errors.gender}</p>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              className="input-form"
              type="text"
              name="address"
              value={formValues.address}
              placeholder="Enter address"
              onChange={onHandleChange}
            />
            <p className="errorText">{errors.address}</p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ValidForm;
