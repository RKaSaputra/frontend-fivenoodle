import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users.jsx";
import Menus from "./pages/Menus.jsx";
import AddUser from "./pages/AddUser.jsx";
import EditUser from "./pages/EditUser.jsx";
import AddMenu from "./pages/AddMenu.jsx";
import EditMenu from "./pages/EditMenu.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/menus/add" element={<AddMenu />} />
          <Route path="/menus/edit/:id" element={<EditMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
