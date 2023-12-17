import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Utils/Api';
import '../Styles/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = await loginUser(username, password);

            // Almacena el token en el almacenamiento local (puedes elegir la mejor opción para tu aplicación)
            localStorage.setItem('token', token);

            // Redirige al usuario al dashboard
            navigate('/dashboard');
        } catch (error) {
            console.log(error.message); // Maneja el error como desees
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
                <div className="input-group">
                    <label htmlFor="username">Usuario</label>
                    <input 
                        id="username"
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
