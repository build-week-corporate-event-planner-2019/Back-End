const Users = require("../users/users-model.js");
const Events = require("../events/events-model.js");
const Todos = require("../todos/todos-model.js");
const Items = require("../items/items-model.js");
const Vendors = require("../vendors/vendors-model.js");

module.exports = {
  validateUniqueEmail,
  validateUser,
  validateUserId,
  validateLogin,
  validateEvent,
  validateEventId,
  validateTodo,
  validateTodoId,
  validateItem,
  validateItemId,
  validateVendor,
  validateVendorId,
};

// ================ VALIDATION FOR USERS ROUTER ================

function validateUniqueEmail(req, res, next) {
  const { id } = req.params;
  const { email } = req.body;

  Users.getUsers()
    .then(users => users.filter(user => user.email === email))
    .then(([result]) => {
      if (result) {
        if (id == result.id) {
          next();
        } else {
          return res.status(400).json({
            message: `Account with ${email} already exists. Please choose another e-mail.`,
          });
        }
      } else {
        next();
      }
    });
}

function validateUser(req, res, next) {
  const user = req.body;

  if (
    !user.email ||
    !user.name ||
    !user.password ||
    !user.company ||
    !user.role
  ) {
    return res.status(400).json({
      message: "Missing email, password, name, company, or role.",
    });
  }

  if (Object.keys(user).length > 5) {
    return res.status(400).json({
      message:
        "A new user must have only an email, password, name, company, and role.",
    });
  }

  next();
}

function validateUserId(req, res, next) {
  const { id } = req.params;

  Users.getUserById(id)
    .then(user => {
      if (user) {
        req.validUser = user;
        next();
      } else {
        return res
          .status(404)
          .json({ message: `User with the id ${id} does not exist.` });
      }
    })
    .catch(err => {
      return res
        .status(500)
        .json({ message: "Error occurred while getting a user by id.", err });
    });
}

function validateLogin(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing email or password." });
  }

  next();
}

// ================ VALIDATION FOR EVENTS ROUTER ================

function validateEvent(req, res, next) {
  const event = req.body;

  if (!event.user_id || !event.name || !event.budget || !event.start_date) {
    return res
      .status(400)
      .json({ message: "Missing user_id, name, budget, or start_date." });
  }

  next();
}

function validateEventId(req, res, next) {
  const { id } = req.params;

  Events.getEventById(id)
    .then(event => {
      if (event) {
        req.validEvent = event;
        next();
      } else {
        return res
          .status(404)
          .json({ message: `Event with the id ${id} does not exist.` });
      }
    })
    .catch(err => {
      return res
        .status(500)
        .json({ message: "Error occurred while getting an event by id.", err });
    });
}

// ================ VALIDATION FOR TODOS ROUTER ================

function validateTodo(req, res, next) {
  const todo = req.body;

  if (!todo.event_id || !todo.name) {
    return res.status(400).json({ message: "Missing event_id or name." });
  }

  next();
}

function validateTodoId(req, res, next) {
  const { id } = req.params;

  Todos.getTodoById(id)
    .then(todo => {
      if (todo) {
        req.validTodo = todo;
        next();
      } else {
        return res
          .status(404)
          .json({ message: `Todo with the id ${id} does not exist.` });
      }
    })
    .catch(err => {
      return res
        .status(500)
        .json({ message: "Error occurred while getting an todo by id.", err });
    });
}

// ================ VALIDATION FOR ITEMS ROUTER ================

function validateItem(req, res, next) {
  const item = req.body;

  if (!item.event_id || !item.name || !item.cost) {
    return res
      .status(400)
      .json({ message: "Missing event_id, name, or cost." });
  }

  next();
}

function validateItemId(req, res, next) {
  const { id } = req.params;

  Items.getItemById(id)
    .then(item => {
      if (item) {
        req.validItem = item;
        next();
      } else {
        return res
          .status(404)
          .json({ message: `Item with the id ${id} does not exist.` });
      }
    })
    .catch(err => {
      return res
        .status(500)
        .json({ message: "Error occurred while getting an item by id.", err });
    });
}

// ================ VALIDATION FOR VENDORS ROUTER ================

function validateVendor(req, res, next) {
  const vendor = req.body;

  if (!vendor.event_id || !vendor.name) {
    return res.status(400).json({ message: "Missing event_id or name." });
  }

  next();
}

function validateVendorId(req, res, next) {
  const { id } = req.params;

  Vendors.getVendorById(id)
    .then(vendor => {
      if (vendor) {
        req.validVendor = vendor;
        next();
      } else {
        return res
          .status(404)
          .json({ message: `Vendor with the id ${id} does not exist.` });
      }
    })
    .catch(err => {
      return res.status(500).json({
        message: "Error occurred while getting an vendor by id.",
        err,
      });
    });
}
