import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function MenuList() {
  const [products, setProducts] = useState([
    // {
    //   name: "Noodle",
    //   price: 3030,
    //   user: {
    //     name: "Prabu",
    //   },
    // },
  ]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/menus"); // koreksi
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/menus/${productId}`); // koreksi
    getProducts();
  };

  return (
    <div className="box mt-3 mr-3">
      <h1 className="title">Menu Table</h1>
      <h2 className="subtitle">List of Menu</h2>
      <Link to="/menus/add" className="button is-primary mb-3">
        Add New
      </Link>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Created By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>$ {product.price}</td>
              <td>{product.user.name}</td>
              <td>
                <Link
                  to={`/menus/edit/${product.uuid}`}
                  className="button is-small is-info mr-3"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.uuid)}
                  className="button is-small is-danger"
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
}

export default MenuList;
