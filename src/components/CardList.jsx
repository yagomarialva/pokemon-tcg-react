import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress, TextField, Button } from '@mui/material';
import CardDisplay from './CardDisplay';
import { getCards } from '../services/api';

const CardList = ({ addToDeck, onAdd }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const data = await getCards({ q: `name:${searchQuery}` });
        setCards(data.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
      setLoading(false);
    };

    fetchCards();
  }, [searchQuery]);

  const handleSearch = () => {
    // The search will trigger a new fetch due to the dependency on searchQuery in the useEffect
    setSearchQuery(searchQuery);
  };

  return (
    <div>
      <TextField
        label="Search for Pokémon cards"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>

      {loading ? (
        <CircularProgress style={{ display: 'block', margin: '20px auto' }} />
      ) : (
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <CardDisplay card={card} onAdd={onAdd}  />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CardList;
