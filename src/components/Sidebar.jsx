import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(Logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
    <aside className="menu pl-2 has-shadow">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <NavLink to={"/dashboard"}>
            Dashboard
          </NavLink>
        </li>
          <li><NavLink to={"/menu"} >Menu</NavLink></li>
          <li><NavLink to={"/users"} >Users</NavLink></li>
        </ul>
        
        <p className="menu-label">
          Settings
        </p>
        <ul className="menu-list">
          <li><button onClick={logout} className='button is-white'>Logout</button></li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar