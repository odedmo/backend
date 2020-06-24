const TodoModel = require('../data/db/models/todo');

const getTodos = () => {
    return TodoModel.find();
};

const addTodo = ({ test }) => {
    return TodoModel({ test }).save();
}

const updateTodo = ({ _id, test }) => {
    return TodoModel.findOneAndUpdate({ _id }, { test });
  }

module.exports = {
    getTodos,
    addTodo,
    updateTodo
}