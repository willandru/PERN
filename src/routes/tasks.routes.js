// EL OBJETO ROUTER NOS VA A PERMITIR CREAR NUEVAS URLS

const { Router } = require('express');
const router = Router()

//CRUD '/task'

    //CREATE A NEW TASK
    router.post('/tasks', (req,res)=>{
        res.send('Crating a list of tasks');
    })
    //READ A TASK
    router.get('/tasks', (req,res)=>{
        res.send('Retriving a list of tasks');
    })
    //UPDATE A TASK
    router.put('/tasks', (req,res)=>{
        res.send('Actualizando a list of tasks');
    })
    //DELETE A TASK
    router.delete('/tasks', (req,res)=>{
        res.send('Eliminando a list of tasks');
    })

    //READ A SINGLE TASK A TASK
router.get('/tasks/10', (req,res)=>{
    res.send('Showing 1 tasks');
})

router.get('/tasks', (req,res)=>{
    res.send('Retriving a list of tasks');
})
// exportamos el router
module.exports= router;
