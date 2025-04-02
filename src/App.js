import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginButton from './LoginButton';
import Callback from './Callback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
