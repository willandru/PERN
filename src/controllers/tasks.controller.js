
const pool = require('../db')


const createTask = async (req,res)=>{

    /* const task = req.body
    console.log(task) */

    const {title, description} = req.body
    //console.log(title, description);


const result = await pool.query("INSERT INTO task (title, description) VALUES($1,$2)",[
    title,
    description
]);


    /* const result = await pool.query("INSERT INTO task (title, description) VALUES ($1,$2)", [
        title, 
        description
    ]); */
    console.log(result); 

    res.send('W:Crating a tasks')
}
const readAllTasks = async (req,res)=>{
    res.send('W:Reading a list of tasks')
}
const readTask = async (req,res)=>{
    res.send('W:Reading one task')
}
const updateTask = async (req,res)=>{
    res.send('W:Updating a  task')
}
const deleteTask = async (req,res)=>{
    res.send('W: Deliting a task')
}
module.exports={
    createTask,
    readTask,
    readAllTasks,
    updateTask,
    deleteTask
}