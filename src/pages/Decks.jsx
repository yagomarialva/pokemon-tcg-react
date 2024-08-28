import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const Decks = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    // Simulação de carregamento de decks do localStorage ou de uma API
    const savedDecks = JSON.parse(localStorage.getItem('decks')) || [];
    setDecks(savedDecks);
  }, []);

  const handleViewDeck = (deck) => {
    // Função para visualizar um deck (pode redirecionar para uma página de detalhes)
    console.log('Visualizar deck:', deck);
  };

  const handleDeleteDeck = (deckId) => {
    // Função para deletar um deck
    const updatedDecks = decks.filter(deck => deck.id !== deckId);
    setDecks(updatedDecks);
    localStorage.setItem('decks', JSON.stringify(updatedDecks));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Meus Decks
      </Typography>
      <Grid container spacing={3}>
        {decks.length === 0 ? (
          <Typography variant="h6" component="p">
            Você ainda não possui nenhum deck salvo.
          </Typography>
        ) : (
          decks.map((deck) => (
            <Grid item xs={12} sm={6} md={4} key={deck.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {deck.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {deck.cards.length} cards
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleViewDeck(deck)}
                    style={{ marginTop: '10px' }}
                  >
                    Visualizar
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteDeck(deck.id)}
                    style={{ marginTop: '10px', marginLeft: '10px' }}
                  >
                    Deletar
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Decks;
