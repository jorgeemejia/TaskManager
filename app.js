require('./db/connect')
const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
require('dotenv').config()

//since we wanna send jsons from our application and since we wanna access jsons we gotta use
//if not included data won't be available in req.body
app.use(express.json())

//when encountering this route, use this middleware
app.use('/api/v1/tasks', tasks)

//serve static files
app.use(express.static('./public'))

//handle 404 errors
app.use(notFound)


async function start() {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, (req,res)=> {
            console.log(`listening to port ${port}`)
        })
    }
    catch(error) {
        console.log(error)
    }
}

start()

// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task