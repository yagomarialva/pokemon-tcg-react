import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Home from './pages/Home'
import Decks from './pages/Decks'
import DeckBuilder from './components/DeckBuilder';



function App() {
  return (
    <Router>
      <Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deck-builder" element={<DeckBuilder />} />
          <Route path="/decks" element={<Decks />} />
        </Routes>
      </Menu>
    </Router>
  );
}

export default App;
