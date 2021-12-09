//EL OBJETO ROUTER NOS VA A PERMITIR CREAR NUEVAS URLS
const { Router } = require('express');
const router = Router()

//IMPORTAMOS LOS tasks.controllers
const { deleteTask,
    createTask,
    readTask,
    readAllTasks,
    updateTask
} = require('../controllers/tasks.controller')

//CREAMOS LAS URLS
router.post('/tasks', createTask)
router.get('/tasks/:id', readTask)
router.get('/tasks', readAllTasks)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

// exportamos el router
module.exports = router;
