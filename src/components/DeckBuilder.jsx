import React, { useState, useEffect } from "react";
import { getCards } from "../services/api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const DeckBuilder = () => {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
      setCards(result.data); // Supondo que o resultado esteja em `result.data`
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCards();
    loadDeck(); // Carrega o deck quando o componente é montado
  }, []);

  // Filtrando os cards com base no termo de pesquisa
  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Deck Builder</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mr:20,
          gap: 2,
          justifyContent: "center",
          mt: 2
        }}
      >
        {filteredCards.map((card) => (
          <Card key={card.id} sx={{ width: 350 }}>
            <CardMedia
              sx={{ height: 500 }}
              image={card.images.small}
              title={card.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Tipo: {card.supertype}
                <br />
                HP: {card.hp}
                <br />
                Artista: {card.artist}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleAddCard(card)}>Add to Deck</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default DeckBuilder;
