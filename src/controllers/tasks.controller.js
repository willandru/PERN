
const pool = require('../db')


const createTask = async (req, res) => {

    /* const task = req.body
    console.log(task) */

    const { title, description } = req.body
    //console.log(title, description);


    try {
        const result = await pool.query("INSERT INTO task (title, description) VALUES($1,$2) RETURNING *", [
            title,
            description
        ]);
        res.json(result.rows[0])
    } catch (error) {
        //console.log(error.message)
        res.json({ error: error.message })
    }

}
const readAllTasks = async (req, res) => {

    try {
        const allTasks = await pool.query('SELECT * FROM task')
        res.json(allTasks.rows);
    } catch (error) {
        console.log(error.message);
    }
}
const readTask = async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query('SELECT * FROM task WHERE id= $1', [id])

        if (result.rows.length == 0)
            return res.status(404).json({
                message: " Task not found"
            });

     return res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }

};
const updateTask = async (req, res) => {
    res.send('W:Updating a  task')
}
const deleteTask = async (req, res) => {
    res.send('W: Deliting a task')
}
module.exports = {
    createTask,
    readTask,
    readAllTasks,
    updateTask,
    deleteTask
}