import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Collection } from './pages/Collection';

export default function App() {
  console.log("APP RENDERED");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </Router>
  );
}

