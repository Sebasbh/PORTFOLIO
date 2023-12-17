import mongoose from 'mongoose';

const passwordMinLength = 8;

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length >= passwordMinLength,
      message: (props) => `La contraseña debe tener al menos ${passwordMinLength} caracteres.`,
    },
  },
});


const adminModel = mongoose.model('admin', adminSchema, 'admin');

export default adminModel;


