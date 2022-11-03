import React, { useState } from "react";
const ForgetPassword = () => {
  const [forget, setforget] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/user/forget-password", {
      method: "POST",
      headers:{"content-type":"application/json"},
      body: JSON.stringify(forget),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.mailMessage);
      });
    console.log(forget);
  };
  return (
    <div
      style={{ height: "80vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <form onSubmit={handleSubmit} className="text-center w-25">
        <h3 className="mb-4">Forget Password</h3>
        <input
          onChange={(e) => setforget({ email: e.target.value })}
          className="form-control p-3"
          type="text"
          placeholder="enter your email"
        />
        <button type="submit" className="btn btn-info mt-3">
          Send
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
