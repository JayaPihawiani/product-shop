import React, { useEffect } from "react";
import Input from "./Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const url = "http://localhost:5000";

const FormEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    const getDataById = async () => {
      try {
        const response = await axios.get(`${url}/api/product/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
      } catch (error) {
        console.log(error.response);
      }
    };
    getDataById();
  }, [id]);

  const updateData = async (id) => {
    try {
      await axios.patch(`${url}/api/product/${id}`, { name, price });
      navigate("/product");
    } catch (error) {
      const message = error.response.data.msg;
      setErr(true);
      setMsg(message);
      setTimeout(() => {
        setErr(false);
      }, 4000);
    }
  };

  return (
    <div>
      <h3>Product</h3>
      <h5>Edit product</h5>
      <div className="card p-2 shadow">
        <div className="card-body d-flex flex-column">
          {err && <p className="text-danger text-center">{msg}</p>}
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
            type="text"
            placeholder="Price"
            classname="mb-2"
            value={price}
            change={(e) => setPrice(e.target.value)}
          />
          <div>
            <button
              className="btn btn-success mt-4"
              onClick={() => updateData(id)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditProduct;
