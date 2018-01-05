const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// const id = '5a4fe945312901a26368d3ae'
// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo By Id', todo)
// }).catch((e) => console.log(e))

const id = '5a4fc74fd0e3e99a3d4e39d7'
User.findById(id).then((user) => {
    if (!user) {
        return console.log('Id not found')
    }
    console.log('User By Id', user)
}).catch((e) => console.log(e))