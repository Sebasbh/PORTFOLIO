import rateLimit from 'express-rate-limit';

// Mensajes personalizados
const loginMessage = 'Demasiados intentos de inicio de sesión. Por favor, inténtelo de nuevo más tarde.';

// Middleware de rate limit para la ruta de inicio de sesión
export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // Número máximo de intentos permitidos en el período de tiempo especificado
    message: loginMessage,
  });