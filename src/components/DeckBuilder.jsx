import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getCards } from '../services/api';

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
    const newDeck = [...deck, card];
    setDeck(newDeck);
    localStorage.setItem('deck', JSON.stringify(newDeck));
  };

  // Função para carregar cards da API
  const fetchCards = async () => {
    try {
      const result = await getCards();
      console.log(result)
      setCards(result.data); // Supondo que o resultado esteja em `result.data`
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCards();
    loadDeck(); // Carrega o deck quando o componente é montado
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      renderCell: (params) => <img src={params.row.images.large} alt={params.row.name} style={{ width: '100%' }} />,
    },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'supertype', headerName: 'Tipo', width: 150 },
    { field: 'artist', headerName: 'Artista', width: 150 },
    { field: 'hp', headerName: 'HP', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <button onClick={() => handleAddCard(params.row)}>Add to Deck</button>
      ),
    },
  ];

  return (
    <div>
      <h1>Deck Builder</h1>
      <div style={{ height: '50%', width: '100%' }}>
        <DataGrid
          rows={cards}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          getRowId={(row) => row.id} // Certifica-se de que a DataGrid saiba como identificar cada linha
        />
      </div>
      {/* <h2>My Deck</h2>
      <ul>
        {deck.map((card) => (
          <li key={card.id}>{card.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DeckBuilder;
