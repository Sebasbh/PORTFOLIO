// Api.js

import axios from 'axios';

export const url = {
  apiUrl:'http://localhost:8000/admin',
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
