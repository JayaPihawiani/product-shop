import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const url = "http://localhost:5000";

const UserList = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get(`${url}/api/user`);
      setUser(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${url}/api/user/${id}`);
      getUser();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h3>Users</h3>
      <h5>Daftar user</h5>
      <Link className="btn btn-success mb-2" to="/users/add">
        Add user
      </Link>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, index) => (
            <tr key={e.id}>
              <td>{index + 1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.role}</td>
              <td>
                <Link className="btn btn-success" to={`/users/edit/${e.id}`}>
                  Edit
                </Link>
                <button
                  className="btn btn-danger ms-1"
                  onClick={() => deleteUser(e.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
