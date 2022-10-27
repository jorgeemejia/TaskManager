const Task = require('../models/Task')

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})

    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch(error) {
        res.status(500).json({msg:error})
    }
}

const getTask = async (req, res) => {
    try {
        const task = await Task.findOne({_id:req.params.id})
        if(!task) {
            return res.status(404).json({msg:`No task with id : ${req.params.id}`})
        }
        res.status(200).json({ task })
    }
    catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateTask = (req, res) => {
    res.json({id:req.params.id})
}

const deleteTask = (req, res) => {
    res.json({id:req.params.id})
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}



// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task