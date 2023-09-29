import express from 'express';
import projectController from '../Controllers/Controllers.js';

const router = express.Router();

// Rutas para Projectos
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/', projectController.createProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

export default router;
