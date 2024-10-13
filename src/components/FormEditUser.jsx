import React from "react";
import Input from "./Input";

const FormEditUser = () => {
  return (
    <div>
      <h3>User</h3>
      <h5>Edit user</h5>
      <div className="card p-2 shadow">
        <div className="card-body d-flex flex-column">
          <label className="form-label fw-bold">Name</label>
          <Input type="text" placeholder="Your name" classname="mb-2" />
          <label className="form-label fw-bold">Email</label>
          <Input type="text" placeholder="Your email" classname="mb-2" />
          <label className="form-label fw-bold">Password</label>
          <Input type="password" placeholder="********" classname="mb-3" />
          <label className="form-label fw-bold">Confirm password</label>
          <Input type="password" placeholder="********" classname="mb-3" />
          <div>
            <button className="btn btn-success mt-4">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditUser;
