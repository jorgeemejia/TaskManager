const Task = require('../models/Task')

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
        // res.status(200).json({tasks, amount:tasks.length})
        // res.status(200).json({success:true})

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

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({_id:req.params.id})
        if(!task) {
            return res.status(404).json({msg:`No task with id : ${req.params.id}`})
        }
        res.status(200).json({ task })
        // res.status(200).json({task:null, status: 'success'})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateTask = async (req, res) => {
    try {
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
    }
    catch(error) {
        res.status(500).json({msg:error})
    }
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