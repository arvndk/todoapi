const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Error connecting to database..');
    }
    console.log('Connected to database!');
    const db = client.db('TodoApp');

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Error fetching data...", err);
    // });

    db.collection('Users').find({name: 'Aravind'}).toArray().then((doc) => {
        console.log(doc);
    })
    // client.close();
});