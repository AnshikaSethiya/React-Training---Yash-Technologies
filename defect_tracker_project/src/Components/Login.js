import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

    const navigate = useNavigate();
    const [user, setUser] = useState({username:"", password:"" });

    const changeHandler = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(user.username === "Anshika" && user.password === "Anshika123"){

        }

        if(user.username === "test_user" && user.password === "test123"){
            props.login(user.username);
            navigate("/add")
        }else{
            window.alert('Username or Password incorrect!!');
        }
    }

  return (
    <div className="container py-5">
    <div className="card border-0 shadow p-3 mx-auto" style={{width:'30rem'}}>
        <form>
          <h3 className="form-header nav-background">Login</h3>
          <div className="form-group ">
              <label htmlFor="username">Username: </label>
              <input 
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Username"
                  name="username"
                  value={user.username}
                  onChange={changeHandler}
              />
          </div>
          <br />
          <div className="form-group">
          <label htmlFor="password">Password: </label>
              <input 
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  name="password"
                  value={user.password}
                  onChange={changeHandler}
              />
          </div>
          <br />
            <button className="button btn btn-primary" type="submit" onClick={(e) => onFormSubmit(e)}>Sign In</button>
        </form>
    </div>
    
  </div>
  )
}

export default Login