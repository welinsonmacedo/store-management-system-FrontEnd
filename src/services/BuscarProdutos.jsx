// apiService.js

import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Substitua pela URL real do seu backend

const Produtos = async () => {
  try {
    const response = await axios.get(`${API_URL}/produtos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};
export default Produtos