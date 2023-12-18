// Api.js
import axios from 'axios';

export const url = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://sebastiancreativeportfolio.vercel.app/' // URL de producción (Vercel)
    : 'http://localhost:8000/admin', // URL local
};


export const login = async (username, password) => {
  try {
    const response = await axios.post(`${url.apiUrl}/login`, {
      username,
      password,
    });
    // Manejar la respuesta según tus necesidades
    console.log('Server Response:', response.data);
    return response.data;
  } catch (error) {
    // Manejar errores
    console.error('Error during login:', error);
    throw error;
  }
};

