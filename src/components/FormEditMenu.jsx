import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditMenu = () => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [rating, setRating] = useState("");
  const [nutriScore, setNutriScore] = useState("");
  const [img, setImg] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/menus/${id}`); // koreksi
        setName(response.data.name);
        setCalories(response.data.calories);
        setRating(response.data.rating);
        setNutriScore(response.data.nutriScore);
        setImg(response.data.img);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/menus/${id}`, {
        // koreksi
        name,
        calories,
        rating,
        nutriScore,
        img,
      });
      navigate("/menus");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Edit Product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateProduct}>
              <p className="has-text-centered has-text-danger">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Calories</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Calories"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Rating</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nutri Score</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Nutri Score"
                    value={nutriScore}
                    onChange={(e) => setNutriScore(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label ">Image</label>
                <div className="control">
                  <input
                    className="input"
                    type="file"
                    name="image"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button px-6 mt-6 is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditMenu;
