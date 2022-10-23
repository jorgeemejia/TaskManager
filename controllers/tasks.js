const getAllTasks = (req,res) => {
    res.send('get all tasks')
}

const createTask = (req, res) => {
    res.send('created a new task')
}

const getTask = (req, res) => {
    res.send('get a single task')
}

const updateTask = (req, res) => {
    res.send('update a single task')
}

const deleteTask = (req, res) => {
    res.send('delete a single task')
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