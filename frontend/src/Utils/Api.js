// api.js
const apiUrl = "http://localhost:8000"; 

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${apiUrl}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      return token;
    } else {
      throw new Error('Nombre de usuario o contraseña incorrectos');
    }
  } catch (error) {
    console.error('Error durante la autenticación:', error);
    throw error;
  }
};
