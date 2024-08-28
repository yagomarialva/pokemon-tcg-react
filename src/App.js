import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DeckBuilder from './components/DeckBuilder';  // Certifique-se de que o caminho está correto
import Deck from './pages/Deck';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deck-builder" element={<DeckBuilder />} />
        <Route path="/decks" element={<Deck />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
