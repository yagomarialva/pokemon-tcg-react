import React, { useState, useEffect } from 'react';
import CardList from './CardList';

const DeckBuilder = () => {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState([]);

  // Função para recuperar o deck do localStorage
  const loadDeck = () => {
    const storedDeck = JSON.parse(localStorage.getItem('deck')) || [];
    setDeck(storedDeck);
  };

  // Função para adicionar um card ao deck e ao localStorage
  const handleAddCard = (card) => {
    // Verifica se o card já está no deck
    const newDeck = [...deck, card];
    setDeck(newDeck);
    localStorage.setItem('deck', JSON.stringify(newDeck));
  };

  // Função para carregar cards de uma API (exemplo)
  const fetchCards = async () => {
    // Simulação de dados fictícios
    const fetchedCards = [
      { id: 1, name: 'Card 1', images: { large: 'https://example.com/card1.png' } },
      { id: 2, name: 'Card 2', images: { large: 'https://example.com/card2.png' } }
    ];
    setCards(fetchedCards);
  };

  useEffect(() => {
    fetchCards();
    loadDeck(); // Carrega o deck quando o componente é montado
  }, []);

  return (
    <div>
      <h1>Deck Builder</h1>
      <CardList cards={cards} onAdd={handleAddCard} />
      <h2>My Deck</h2>
      <ul>
        {deck.map((card) => (
          <li key={card.id}>{card.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeckBuilder;
