import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navigation from "./Components/Navigation/Navigation";
import HeroSection from "./Components/HeroSection/Homepage";
import "./index.css"
const App = () => {
  return (
    <Router>

      <Routes>
        {/* <Route exact path="/" element={<Navigation />} /> */}
        <Route exact path="/" element={<HeroSection />} />
      </Routes>

    </Router>
  )
}
export default App;