import Project from '../Models/Models.js';

// Obtener todos los Projectos
const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los Projectos' });
    }
};

// Obtener un Projecto por ID
const getProjectById = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ error: 'Projecto no encontrado' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el Projecto' });
    }
};

// Crear un nuevo Projecto
const createProject = async (req, res) => {
    const projectData = req.body;
    try {
        const project = await Project.create(projectData);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el Projecto' });
    }
};

// Actualizar un Projecto
const updateProject = async (req, res) => {
    const { id } = req.params;
    const projectData = req.body;
    try {
        const updatedProject = await Project.findByIdAndUpdate(id, projectData, {
            new: true,
        });
        if (!updatedProject) {
            return res.status(404).json({ error: 'Projecto no encontrado' });
        }
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el Projecto' });
    }
};

// Eliminar un Projecto
const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ error: 'Projecto no encontrado' });
        }
        res.json({ message: 'Projecto eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el Projecto' });
    }
};

export default {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
};
