// controllers/authController.js
import adminModel from '../Models/AdminModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new adminModel({
      username,
      password: hashedPassword,
    });

    await newAdmin.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await adminModel.findOne({ username });

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      console.log(password)
      console.log(admin.password)
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generar un token JWT después de una autenticación exitosa
    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({token });
  } catch (error) {
    // Manejar errores de manera adecuada
    console.error('Error during authentication:', error);
    res.status(500).json({ message: 'Error authenticating user', error: error.message });
  }
};


export { register, login };
