const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58a36ff9bce759607b51889311';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

// query user collection, get id, find by id the id, handle all three cases
var uid = '58a1cfd144dade5b6b1915f3';

User.findById(uid).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));
