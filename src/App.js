import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Secondpage from './pages/Secondpage';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function App() {
  const navigate = useNavigate();

  return (
    <BrowserRouter>
      <nav>
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/secondpage')}>Second Page</button>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/secondpage" element={<Secondpage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;