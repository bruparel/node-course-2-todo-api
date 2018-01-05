// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a4f916432dae28e7275cda4')
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos')
    // })

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`)
    }, (err) => {
        console.log('Unable to fetch todos')
    })
    // db.close()
})