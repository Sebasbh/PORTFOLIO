import express from "express";
import { login, register } from "../Controllers/AdminController.js";
import { loginLimiter } from "../Middlewares/RateLimit.js";

const AdminRouter = express.Router();

AdminRouter.post('/login', loginLimiter, login);
AdminRouter.get("/register", register)

export default AdminRouter;