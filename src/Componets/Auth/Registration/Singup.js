import React, { useState } from "react";

const Singup = () => {
  // on chagne state
  const [userInfo, setUserInfo] = useState({});
  // on change file state

  const [file, setFile] = useState(null);
  // handle change
  const handleChange = (e) => {
    const userInfoCopy = { ...userInfo };
    userInfoCopy[e.target.name] = e.target.value;
    setUserInfo(userInfoCopy);
  };

  // handle change file
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  // handle submit
  const handleSubmit = (e) => {
      e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", userInfo.name);
    formData.append("email", userInfo.email);
    formData.append("password", userInfo.password);
    fetch("http://localhost:5000/auth/singUp", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("registration Successful");
      });
  };
  return (
    <div>
      <div className="w-50 m-auto mt-5 pt-5">
        <h3 className="text-center">Registration Form</h3>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label htmlFor="name" class="form-label">
              Your Name
            </label>
            <input
              name="name"
              onChange={handleChange}
              required
              type="text"
              class="form-control p-3"
              placeholder="Your Name"
            />
          </div>

          <div class="mb-3">
            <label htmlFor="email" class="form-label">
              Your Email
            </label>
            <input
              name="email"
              onChange={handleChange}
              required
              type="Email"
              class="form-control p-3"
              placeholder="Email"
            />
          </div>

          <div class="mb-3">
            <label htmlFor="password" class="form-label">
              Password
            </label>
            <input
              name="password"
              onChange={handleChange}
              required
              type="password"
              class="form-control p-3"
              placeholder="Your Name"
            />
          </div>

          <div class="mb-3">
            <label for="file" class="form-label">
              Photo
            </label>
            <input
              onChange={handleFileChange}
              name="file"
              required
              type="file"
              class="form-control p-3"
            />
          </div>
          <button type="submit" className="btn btn-info">
            Sing up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Singup;
