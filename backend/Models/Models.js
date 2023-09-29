import mongoose from 'mongoose';

const modeloSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  imagen_url: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
  github:{
    type: String,
    required: true,
  },
});

const Project = mongoose.model('Projects', modeloSchema);

export default Project