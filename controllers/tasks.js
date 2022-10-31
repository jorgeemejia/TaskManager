const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')

const getAllTasks = asyncWrapper( async (req,res) => {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
})

const createTask = asyncWrapper( async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

const getTask = asyncWrapper(async (req, res) => {
        const task = await Task.findOne({_id:req.params.id})
        if(!task) {
            return res.status(404).json({msg:`No task with id : ${req.params.id}`})
        }
})

const deleteTask = asyncWrapper(async (req, res) => {
        const task = await Task.findOneAndDelete({_id:req.params.id})
        if(!task) {
            return res.status(404).json({msg:`No task with id : ${req.params.id}`})
        }
        res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
        //this js syntax says the value from .id in req.params is assigned to 
        //a new variable, taskID
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators:true,
        })
        if(!task) {
            return res.staus(404).json({msg: `No task with id: ${req.params.id}`})
        }
        res.status(200).json({task})
})




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