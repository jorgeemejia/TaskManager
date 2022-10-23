const mongoose = require('mongoose')

const connectionString =
'mongodb+srv://Jorge:Fuckmemongo21@nodeexpressprojects.yv457ri.mongodb.net/TaskManager?retryWrites=true&w=majority'


const connectDB = (url) => {
return mongoose
        .connect(connectionString, {
        //following lines remove deprecation errors
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
})
}

module.exports = connectDB