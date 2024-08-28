import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" component="h1" gutterBottom>
          Pokémon TCG Deck Builder
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Construa seu deck perfeito com os seus cards favoritos do Pokémon Trading Card Game.
        </Typography>

        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/deck-builder')}
            style={{ marginRight: '10px' }}
          >
            Construir Deck
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => navigate('/decks')}
          >
            Meus Decks
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
