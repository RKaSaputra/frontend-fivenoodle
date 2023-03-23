import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import axios from "axios";

function BlogList() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      Nama: "Boba Masa Kini",
      Deskripsi:
        "Tren minuman boba dewasa ini menjadi daya tarik tersendiri bagi banyak orang, khususnya kaum milenial. Boba atau bubble yang lazimnya dijadikan topping buat minuman seperti milk tea, thai tea, coklat, dan lainnya, bahkan kini sudah jadi gaya hidup bagi kaum muda di manapun berada.",
      img: "https://images.unsplash.com/photo-1592318730259-6f18a6ba1c29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80",
      "blog_category.Nama": "Dessert",
    },
  ]);
  const [blogsCategory, setBlogCategoty] = useState([]);

  useEffect(() => {
    getBlogs();
    getBlogCategoty();
    // console.log(blogsCategory);
  }, []);

  const getBlogs = async () => {
    const response = await axios.get("http://localhost:5000/blog"); // koreksi
    setBlogs(response.data);
  };

  const getBlogCategoty = async () => {
    const response = await axios.get("http://localhost:5000/blog-category");
    setBlogCategoty(response.data);
  };

  const deleteBlog = async (productId) => {
    await axios.delete(`http://localhost:5000/blog/${productId}`); // koreksi
    getBlogs();
  };

  return (
    <div className="box mt-3 mr-3">
      <h1 className="title">Blog Table</h1>
      <h2 className="subtitle">List of Blog</h2>
      <Link to="/blog/add" className="button is-primary mb-3">
        Add New
      </Link>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Blog Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Blog Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={blog.id}>
              <td>{index + 1}</td>
              <td>{blog.Nama}</td>
              <td>{blog.Deskripsi}</td>
              <td>
                <img src={blog.img} alt="" />
              </td>
              <td>Dessert</td>
              {/* <td>{blog.}</td> */}
              <td>
                <Link
                  to={`/blog/edit/${blog.id}`}
                  className="button is-small is-info mr-3"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteBlog(blog.id)}
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

export default BlogList;
