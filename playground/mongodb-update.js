const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Error connecting to database..');
    }
    console.log('Connected to database!');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bf6a7ede535690aeba5263c')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) =>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bf6a905e535690aeba526c7')
    }, {
        $set: {
            name: "Jackson"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    });


});