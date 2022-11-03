import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
const Login = () => {
  // user state
  const [user, setUser] = useState({});
  // use context ,
  const [loggedInUser, setLoggedInUsr] = useContext(userContext);
  //private route
  const history = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // login on change
  const handleChange = (e) => {
    const userCopy = { ...user };
    userCopy[e.target.name] = e.target.value;
    setUser(userCopy);
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else if (data.passwordError) {
          alert(data.passwordError);
        } else {
          alert(data.success);
          sessionStorage.setItem("token", data.access_token);
          setLoggedInUsr(data.data);
          from && history(from.pathname);
        }
      });
  };
  return (
    <div>
      <div
        style={{ height: "90vh" }}
        className="input d-flex justify-content-center align-items-center"
      >
        <form onSubmit={handleSubmit} className="text-center w-25">
          <h2>Login account</h2>
          <input
            onChange={handleChange}
            className="form-control mt-5"
            type="email"
            placeholder="Enter Email"
            name="email"
          />
          <input
            onChange={handleChange}
            className="form-control mt-3 mb-3"
            type="password"
            placeholder="Enter Password"
            name="password"
          />
          <Link to='/forget-password'>Forget Password</Link>
          <br />
          <button type="submit" className="btn btn-info mt-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
