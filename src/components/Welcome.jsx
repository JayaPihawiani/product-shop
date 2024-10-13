import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <React.Fragment>
      <h3>Dashboard</h3>
      <h5>
        Welcome <strong>{user && user.name}</strong>
      </h5>
    </React.Fragment>
  );
};

export default Welcome;
