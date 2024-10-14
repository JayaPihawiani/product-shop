import React, { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const url = "http://localhost:5000";

const FormAddUser = () => {
  const [role, setRole] = useState("");
  console.log(role);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirm] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);

  const addUser = async () => {
    try {
      await axios.post(`${url}/api/user`, {
        name,
        email,
        password,
        role,
        confirmPass,
      });
      navigate("/users");
    } catch (error) {
      setErr(true);
      const mess = error.response.data.msg;
      setMsg(mess);
      setTimeout(() => {
        setErr(false);
      }, 4000);
    }
  };

  return (
    <div>
      <h3>User</h3>
      <h5>add user</h5>
      <div className="card p-2 shadow">
        <div className="card-body d-flex flex-column">
          {err && <p className="text-center text-danger">{msg}</p>}
          <label className="form-label fw-bold">Name</label>
          <Input
            type="text"
            placeholder="Your name"
            classname="mb-2"
            change={(e) => setName(e.target.value)}
          />
          <label className="form-label fw-bold">Email</label>
          <Input
            type="text"
            placeholder="Your email"
            classname="mb-2"
            change={(e) => setEmail(e.target.value)}
          />
          <label className="form-label fw-bold">Password</label>
          <Input
            type="password"
            placeholder="********"
            classname="mb-3"
            change={(e) => setPassword(e.target.value)}
          />
          <label className="form-label fw-bold">Confirm password</label>
          <Input
            type="password"
            placeholder="********"
            classname="mb-3"
            change={(e) => setConfirm(e.target.value)}
          />
          <label className="form-label fw-bold">Role</label>
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">select role</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
          <div>
            <button className="btn btn-success mt-4" onClick={addUser}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddUser;
