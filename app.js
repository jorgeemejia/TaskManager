const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/task')


//since we wanna send jsons from our application and since we wanna access jsons we gotta use
//if not included data won't be available in req.body
app.use(express.json())

//when encountering this route, use this middleware
app.use('/api/v1/tasks', tasks)

app.get('/hello', (req,res)=> {
    res.send('<h1>Hello</h1>')
})


app.listen(port, (req,res)=> {
    console.log(`listening to port ${port}`)
})


// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task