import axios from 'axios';

const API_URL = 'https://api.pokemontcg.io/v2';

const API_KEY = '7377eac2-daa3-42fb-b655-c5cc10e28397'; // Substitua pela sua chave da API

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'X-Api-Key': API_KEY,
  },
});

// Métodos para acessar os endpoints da API

export const getCards = async (query) => {
  const response = await apiClient.get('/cards', { params: query });
  return response.data;
};

export const getCardById = async (id) => {
  const response = await apiClient.get(`/cards/${id}`);
  return response.data;
};

export const getSets = async () => {
  const response = await apiClient.get('/sets');
  return response.data;
};

export const getSetById = async (id) => {
  const response = await apiClient.get(`/sets/${id}`);
  return response.data;
};

export const getTypes = async () => {
  const response = await apiClient.get('/types');
  return response.data;
};

export const getSubtypes = async () => {
  const response = await apiClient.get('/subtypes');
  return response.data;
};

export const getSupertypes = async () => {
  const response = await apiClient.get('/supertypes');
  return response.data;
};

export const getRarities = async () => {
  const response = await apiClient.get('/rarities');
  return response.data;
};
