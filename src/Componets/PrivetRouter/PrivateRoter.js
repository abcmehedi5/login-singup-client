import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "../../App";

const PrivateRoter = ({ children }) => {
    const location = useLocation();
  const [loggedInUser, setLoggedInUsr] = useContext(userContext);
  return (
    <>
      {loggedInUser.email ? (
        children
      ) : (
        <Navigate to="/login" replace state={{ from: location }} />
      )}
    </>
  );
};

export default PrivateRoter;
