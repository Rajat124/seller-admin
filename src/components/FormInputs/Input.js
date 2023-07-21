import { useState } from "react";
import Button from "../UI/Button";
// import "./Input.css";

const Input = (props) => {
  const [id, setid] = useState("");
  const [price, setPrice] = useState("");
  const [name, setname] = useState("");
  const [category, setcategory] = useState("Electronics");

  const idHandler = (e) => {
    setid(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const nameHandler = (e) => {
    setname(e.target.value);
  };
  const categoryHandler = (e) => {
    setcategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const itemlist = {
      id: id,
      price: price,
      name: name,
      category: category,
    };

    props.onSaveData(itemlist);
    setid("");
    setPrice("");
    setname("");
  };

  return (
    <div>
      <div className="container">
        <form className="form-control border-dark" onSubmit={submitHandler}>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="number"
              value={id}
              onChange={idHandler}
            ></input>
            <label>Product ID:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="number"
              value={price}
              onChange={priceHandler}
            ></input>
            <label>Selling Price:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={nameHandler}
            ></input>
            <label>Product Name:</label>
          </div>
          <div className="form-floating mb-3">
            <select className="form-select" onChange={categoryHandler}>
              <option>Electronics</option>
              <option>Food</option>
              <option>Skincare</option>
            </select>
            <label>Choose Category:</label>
          </div>
          <Button type="Submit">ADD Product</Button>
        </form>
      </div>
    </div>
  );
};

export default Input;
