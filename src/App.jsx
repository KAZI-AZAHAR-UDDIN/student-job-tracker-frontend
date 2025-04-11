import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;