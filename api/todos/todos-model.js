const db = require("../../database/db-config.js");

module.exports = {
  addTodo,
  getTodosBy,
  getTodoById,
  getTodos,
  updateTodo,
  deleteTodo,
};

function getTodos() {
  return db("todos");
}

function getTodosBy(filter) {
  return db("todos").where(filter);
}

function getTodoById(id) {
  return db("todos")
    .where({ id })
    .first();
}

function addTodo(todo) {
  return db("todos")
    .insert(todo, "id")
    .then(([id]) => getTodoById(id));
}

function updateTodo(changes, id) {
  return db("todos")
    .where("id", id)
    .update(changes)
    .then(outcome => getTodoById(id));
}

function deleteTodo(id) {
  return db("todos")
    .where("id", id)
    .del();
}
