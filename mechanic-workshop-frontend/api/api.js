// mechanic-workshop-frontend/api/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // URL da API no backend

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, { username, password });
    return response.data; // Retorna o token
  } catch (error) {
    throw error;
  }
};
