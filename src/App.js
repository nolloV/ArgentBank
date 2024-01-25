import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <div className="container">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          {/* <Route path="/Host/:id" element={<Host />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
