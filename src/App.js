import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <HeroSection /> */}
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;