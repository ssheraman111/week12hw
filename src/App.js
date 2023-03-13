import React from "react";
import { Card } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import AddBlog from "./Components/AddBlog/AddBlog";
import CardList from "./Components/CardList/CardList";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/card-list" element={<CardList />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
