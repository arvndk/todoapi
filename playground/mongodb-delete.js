const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Error connecting to database..');
    }
    console.log('Connected to database!');
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log('Deleted result', result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5bf6a25ee535690aeba523b5')}).then((result) => {
        console.log(result);
    });

    db.collection('Users').deleteMany({name: 'Aravind'}).then((result) => {
    console.log(result);
    });
});