const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bf7def9c92eda2d8ca6e285';

// if(!ObjectID.isValid(id)) {
//     console.log('Invalid ID');
// }

// Todo.find({
//     __id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     __id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found!');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => {
//     console.log(e);
// })

User.findById(id).then((user) => {
    if(!user) {
        return console.log('No user found..');
    }
    console.log('User', user);
}).catch((e) => {
    console.log(e);
});
