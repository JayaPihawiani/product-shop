import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
const url = "http://localhost:5000";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get(`${url}/api/product`);
      setData(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const deleteData = async (id) => {
    await axios.delete(`${url}/api/product/${id}`);
    getProduct();
  };

  return (
    <div>
      <h3>Product</h3>
      <h5>Daftar product</h5>
      <Link className="btn btn-success mb-2" to="/product/add">
        Add product
      </Link>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Created by</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <tr key={e.id}>
              <td>{index + 1}</td>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>{e.user.name}</td>
              <td>
                <Link className="btn btn-success" to={`/product/edit/${e.id}`}>
                  Edit
                </Link>
                <button
                  className="btn btn-danger ms-1"
                  onClick={() => deleteData(e.id)}
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

export default ProductList;
