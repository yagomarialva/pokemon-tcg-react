import axios from 'axios';

const API_URL = 'https://api.pokemontcg.io/v2';

export const getCards = async (query) => {
  const response = await axios.get(`${API_URL}/cards`, {
    params: query,
    headers: {
      'X-Api-Key': '7377eac2-daa3-42fb-b655-c5cc10e28397', // Pode ser opcional dependendo da API
    },
  });
  return response.data;
};
