import React, { useEffect, useState } from "react";
import Input from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { replace, useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

const Login = () => {
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard", replace);
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const AuthSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-2 shadow">
        <div className="card-body d-flex flex-column">
          <h3 className="mb-4">Sign In</h3>
          {isError && <p className="text-danger">{message}</p>}
          <form className="d-flex flex-column" onSubmit={AuthSubmit}>
            <label className="form-label fw-bold">Email</label>
            <Input
              type="text"
              placeholder="Your email"
              change={(e) => setEmail(e.target.value)}
              classname="mb-2"
            />
            <label className="form-label fw-bold" style={{ width: "280px" }}>
              Password
            </label>
            <Input
              type="password"
              placeholder="********"
              change={(e) => setPassword(e.target.value)}
              classname="mb-3"
            />
            <button className="btn btn-success" type="submit">
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
