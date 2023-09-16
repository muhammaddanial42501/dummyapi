import React, { useEffect, useState } from "react";
import "./Style.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddItem from "./AddItem.js";
import { Button } from "bootstrap";
// import AddItem from "./AddItem";
// import Button from "react-bootstrap/Button"; // Correct import for Bootstrap Button

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  console.warn(data);

  // const handleAddItem = (newItem) => {
  //   newItem.id = Date.now();
  //   setData([...data, newItem]);

  return (
      <Router>
    <div className="container p-4">
        
        <Link to="/additem" className="btn btn-primary float-right">AddItem</Link>
        <Route path="/additem" Component={AddItem}></Route>
     


      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  width="100"
                  height="100"
                  className="rounded-image"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </Router> 
  );
};

export default Home;
