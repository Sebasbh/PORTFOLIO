import express from 'express';
import readline from 'readline';
import cors from 'cors';

import { connectToLocalDB, connectToAtlasDB } from './DataBase/DataBase.js';
import AdminRouter from './Routes/AdminRouter.js';

const app = express();
const PORT = process.env.PORT || 8000;

// Configuraciones iniciales
app.use(cors({
  origin: ['https://sebastiancreativeportfolio.vercel.app', 'http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Preguntar al usuario si desea conectarse a la base de datos local o a Atlas
rl.question('¿A qué base de datos te gustaría conectarte? (local/atlas): ', (answer) => {
  if (answer.toLowerCase() === 'local') {
    connectToLocalDB();
  } else if (answer.toLowerCase() === 'atlas') {
    connectToAtlasDB();
  } else {
    console.log('Opción no válida. Conectándose a la base de datos local por defecto.');
    connectToLocalDB();
  }

  rl.close();

  // Configuraciones y rutas después de la pregunta
  app.use('/admin', AdminRouter);

  // Manejar rutas no encontradas
  app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
  });

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});


