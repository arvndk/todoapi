const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Error connecting to database..');
    }
    console.log('Connected to database!');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Error adding item to collection..", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: "Aravind",
    //     age: 25,
    //     location: "Kerala"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Error inserting document..", err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});