const createTask = async (req,res)=>{
    res.send('Crating a list of tasks')
}
const readAllTasks = async (req,res)=>{
    res.send('Reading a list of tasks')
}
const readTask = async (req,res)=>{
    res.send('Reading one task')
}
const updateTask = async (req,res)=>{
    res.send('Updating a  task')
}
const deleteTask = async (req,res)=>{
    res.send('Deliting a task')
}


module.exports={
    createTask,
    readTask,
    readAllTasks,
    updateTask,
    deleteTask
}