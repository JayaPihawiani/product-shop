import React, { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const url = "http://localhost:5000";

const FormEditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirm] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);

  const editUser = async () => {
    try {
      await axios.patch(`${url}/api/user/${id}`, {
        name,
        password,
        confirmPass,
      });
      navigate("/users");
    } catch (error) {
      setErr(true);
      const message = error.response.data.msg;
      setMsg(message);
      setTimeout(() => {
        setErr(false);
      }, 4000);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${url}/api/user/${id}`);
        setName(response.data.name);
      } catch (error) {
        console.log(error.response);
      }
    };
    getUser();
  }, [id]);

  return (
    <div>
      <h3>User</h3>
      <h5>Edit user</h5>
      <div className="card p-2 shadow">
        <div className="card-body d-flex flex-column">
          {err && <p className="text-center text-danger fst-italic">{msg}</p>}
          <label className="form-label fw-bold">Name</label>
          <Input
            type="text"
            placeholder="Your name"
            classname="mb-2"
            value={name}
            change={(e) => setName(e.target.value)}
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
          <div>
            <button className="btn btn-success mt-4" onClick={editUser}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditUser;
