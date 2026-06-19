import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/user/auth/Login';
import Register from './pages/user/auth/Register';
import Homepage from './pages/user/home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;