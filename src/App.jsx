import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Card from "./Card";
import Seemore from "./Seemore";
import About from "./About";
import Categories from "./Categories";
import Explore from "./Explore"; // Removed the .jsx extension
import Carousel from "./Carousel";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header /> {/* Render Header at the top of the page */}
      <Routes>
        {/* Home route with multiple components */}
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
        {/* Other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seemore" element={<Seemore />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <Footer /> {/* Render Footer at the bottom of the page */}
    </Router>
  );
}

export default App;
