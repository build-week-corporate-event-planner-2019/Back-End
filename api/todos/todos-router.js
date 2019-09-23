const express = require("express");

const Todos = require("./todos-model.js");

const router = express.Router();

// GET /api/todos
router.get("/", (req, res) => {
  Todos.getTodos()
    .then(todos => {
      let formattedTodos = todos.map(todo => {
        return {
          ...todo,
          completed: todo.completed ? true : false,
        };
      });

      res.status(200).json(formattedTodos);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error occurred while getting all todos.", err });
    });
});

// GET /api/todos/:id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Todos.getTodoById(id)
    .then(todo => {
      if (todo) {
        let formattedTodo = {
          ...todo,
          completed: todo.completed ? true : false,
        };

        res.status(200).json(formattedTodo);
      } else {
        res.status(404).json({ message: `No todo with the id ${id} found.` });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error occurred while getting todo by id.", err });
    });
});

// POST /api/todos
router.post("/", (req, res) => {
  const todo = req.body;

  Todos.addTodo(todo)
    .then(newTodo => {
      let formattedTodo = {
        ...newTodo,
        completed: newTodo.completed ? true : false,
      };

      res.status(201).json(formattedTodo);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error occurred while adding a new todo.", err });
    });
});

// PUT /api/todos/:id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Todos.updateTodo(changes, id)
    .then(todo => {
      let formattedTodo = {
        ...todo,
        completed: todo.completed ? true : false,
      };

      res.status(200).json(formattedTodo);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error occurred while updating todo.", err });
    });
});

// DELETE /api/todos/:id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Todos.deleteTodo(id)
    .then(outcome => {
      if (outcome) {
        res
          .status(200)
          .json({ message: `Todo with the id ${id} successfully deleted.` });
      } else {
        res.status(404).json({ message: `Todo with id ${id} does not exist.` });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error occurred while deleting todo.", err });
    });
});

module.exports = router;
