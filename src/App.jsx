import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Card from "./Card";
import About from "./About";
import Categories from "./Categories";
import Carousel from "./Carousel";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Card />
                <About />
                <Categories />
                <Carousel />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
