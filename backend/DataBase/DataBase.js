import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const localDBUrl = process.env.LOCAL_DB_URL;
const atlasDBUrl = process.env.ATLAS_DB_URL;

// Función para conectar a la base de datos local
export const connectToLocalDB = async () => {
  try {
    await mongoose.connect(localDBUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a la base de datos local establecida');
  } catch (error) {
    console.error('Error al conectar a la base de datos local:', error);
  }
};

// Función para conectar a la base de datos de Atlas
export const connectToAtlasDB = async () => {
  try {
    await mongoose.connect(atlasDBUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a la base de datos de Atlas establecida');
  } catch (error) {
    console.error('Error al conectar a la base de datos de Atlas:', error);
  }
};