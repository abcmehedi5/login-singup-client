import React, { useEffect, useState } from "react";

const AllUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/auth/allUser", {
      method: "GET",
      headers: {
        "content-type": "application/josn",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h2 className="text-center">ALl User Info</h2>
      <hr />

      {user.map((element, index) => {
        return (
          <div className="w-25 m-auto">
            <li>
              <span>
                <img
                  className="img-fluid me-2 m-2"
                  style={{ width: "60px", borderRadius: "50%", height: "60px" }}
                  src={`data:image/png;base64,${element.img.img}`}
                />
              </span>
              <strong>Name:</strong> {element.name}
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default AllUser;
