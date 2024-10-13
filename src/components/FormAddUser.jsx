import React, { useState } from "react";
import Input from "./Input";

const FormAddUser = () => {
  const [nilai, setNilai] = useState("");
  console.log(nilai);

  return (
    <div>
      <h3>User</h3>
      <h5>add user</h5>
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
          <label className="form-label fw-bold">Role</label>
          <select
            className="form-select"
            value={nilai}
            onChange={(e) => setNilai(e.target.value)}
          >
            <option value="">role</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
          <div>
            <button className="btn btn-success mt-4">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddUser;
