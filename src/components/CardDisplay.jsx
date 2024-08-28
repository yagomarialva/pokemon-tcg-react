import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const CardDisplay = ({ card, onAdd }) => {
    console.log("card", card)
  return (
    <Card style={{ margin: '10px', width: '150px' }}>
      <CardMedia
        component="img"
        height="140"
        image={card.images?.large || ''}
        alt={card.name || 'Card image'}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {card.name || 'Unknown Name'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.rules || 'Unknown Series'}
        </Typography>
        <Button onClick={() => onAdd(card)}>Add to Deck</Button>
      </CardContent>
    </Card>
  );
};

export default CardDisplay;
