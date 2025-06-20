import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import HelpPage from "./pages/Help";
import Policy from "./pages/Policy";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Cart from "./pages/Cart";
import Category from "./pages/Category";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
