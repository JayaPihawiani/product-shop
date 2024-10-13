import React from "react";
import Input from "./Input";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const url = "http://localhost:5000";

const FormAddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const addProduct = async () => {
    try {
      await axios.post(`${url}/api/product`, { name, price });
      navigate("/product");
    } catch (error) {
      console.log(error);
      setError(true);
      const message = error.response.data.msg;
      setMsg(message);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <div>
      <h3>Product</h3>
      <h5>Add product</h5>
      <div className="card p-2 shadow">
        <div className="card-body d-flex flex-column">
          {error && <p className="text-center text-danger fst-italic">{msg}</p>}
          <label className="form-label fw-bold">Name</label>
          <Input
            type="text"
            placeholder="Product name"
            classname="mb-2"
            value={name}
            change={(e) => setName(e.target.value)}
          />
          <label className="form-label fw-bold">Price</label>
          <Input
            type="number"
            placeholder="Price"
            classname="mb-2"
            value={price}
            change={(e) => setPrice(e.target.value)}
          />
          <div>
            <button className="btn btn-success mt-4" onClick={addProduct}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
