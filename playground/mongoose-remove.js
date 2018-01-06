const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result)
// })

Todo.findByIdAndRemove('5a50ddf3f28d24ad2ba3872e').then((todo) => {
    console.log(todo)
})
