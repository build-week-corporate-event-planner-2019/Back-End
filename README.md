# Corporate Event Planner - Backend

---

Deployed Backend: [https://corporate-event-planner-be.herokuapp.com/](https://corporate-event-planner-be.herokuapp.com/)

_Corporate Event Planner_ is a full-stack web application that was built during a "build week" by [Lambda School](https://lambdaschool.com/) students. Each student fulfills a role in the project to collectively build the application.

_Corporate Event Planner_ provides a web application that allows a user to create/save events in their profile as well as add various details about the event. Once a user adds an event, they are able to add vendors to keep in touch with (along with any notes regarding the vendor), able to add a todo list, and also add a shopping list. The application could be used for any type of event and is not limited to just corporate events.

## Built With

---

- [Node.js](https://en.wikipedia.org/wiki/Node.js) - JavaScript runtime for executing JavaScript at the server outside the browser
- [Express.js](https://expressjs.com/) - Lightweight web framework to bootstrap Node.js APIs
- [SQLite](https://www.sqlite.org/index.html) - Super lightweight database to bootstrap development environments
- [PostgreSQL](https://www.postgresql.org/) - An advanced object-relational database for production environments
- [Knex.js](https://knexjs.org/) - A SQL query builder that helps abstracting migrations and DDLs for different database types into a single coherent structure
- [Knex-Cleaner](https://www.npmjs.com/package/knex-cleaner) - Helper library to clean a PostgreSQL, MySQL or SQLite3 database tables using Knex
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - A module to help make passwords more secure
- [CORS](https://www.npmjs.com/package/cors) - A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
- [Helmet](https://www.npmjs.com/package/helmet) - A collection of 14 smaller middleware functions that set HTTP response headers
- [JWT](https://jwt.io/) - JSON Web Token for authorization and client side tokens for security
- [Supertest](https://www.npmjs.com/package/supertest) - A test module for HTTP assertions
- [Jest](https://jestjs.io/) - A simple JavaScript testing framework
- [Dotenv](https://www.npmjs.com/package/dotenv) - a zero-dependency module that loads environment variables from a .env file into process.env

## Endpoints

---

### General

##### JWT protected (header) :heavy_check_mark:

A JWT protected endpoint means that a header object, which contains a key called Authorization with the value being a JSON web token, must be passed along with the API call in order to gain access to the endpoint.

```javascript
{
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE1NjkzMDA3NTUsImV4cCI6MTU2OTM4NzE1NX0.MqSP9WknoX-hqVuhPxcqgeMDUyt9DA4nU34OjTQLo2k",
  }
}
```

###### GET [API RUNNING]

```
https://corporate-event-planner-be.herokuapp.com/
```

- JWT protected (header) :x:
- payload (body) :x:

<span style="color: green">API Running Response (200 OK)</span>:

```javascript
{
  "message": "Server up and running!"
}
```

### Users

###### GET [ALL USERS]

```
https://corporate-event-planner-be.herokuapp.com/api/users
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:
- Authorization gets validated over restricted middleware

<span style="color: green">Get All Users Response (200 OK)</span>:

```javascript
[
  {
    id: 1,
    name: "John Smith",
    email: "test@example.com",
    company: "Tester Inc.",
    role: "tester",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "tester@example.com",
    company: "Tester Inc.",
    role: "front desk",
  },
];
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while getting all users.",
  "err": err
}
```

###### GET [USER BY ID]

```
https://corporate-event-planner-be.herokuapp.com/api/users/:id
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:
- ID is defined over the used route at the end
- Authorization gets validated over restricted middleware
- USER ID gets validated over validateUserId middleware

<span style="color: green">Get User By Id Response (200 OK)</span>:

```javascript
{
  "id": 1,
  "name": "John Smith",
  "email": "test@example.com",
  "company": "Tester Inc.",
  "role": "tester"
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while getting user by id.",
  "err": err
}
```

<span style="color: red">User Not Found Response (404 NOT FOUND)</span>:

```javascript
{
  "message": `User with the id ${id} does not exist.`,
  "err": err
}
```

###### POST [REGISTER A USER]

```
https://corporate-event-planner-be.herokuapp.com/api/users/register
```

- JWT protected (header) :x:
- payload (body) :heavy_check_mark:
- USER gets validated over validateUser middleware
- payload.email gets validated over validateUniqueEmail middleware

Example Request Body:

```javascript
{
  "email": "test233@example.com", // required
  "password": "test", // required
  "name": "Tester Three", // required
  "company": "Testers Inc", // required
  "role": "tester" // required
}
```

<span style="color: green">Register a User Response (201 CREATED)</span>:

```javascript
{
  "message": "Welcome Tester Three!",
  "user_id": 3,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE1NjkzMDA3NTUsImV4cCI6MTU2OTM4NzE1NX0.MqSP9WknoX-hqVuhPxcqgeMDUyt9DA4nU34OjTQLo2k"
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while registering a user.",
  "err": err
}
```

###### POST [LOGIN A USER]

```
https://corporate-event-planner-be.herokuapp.com/api/users/login
```

- JWT protected (header) :x:
- payload (body) :heavy_check_mark:

Example Request Body:

```javascript
{
  "email": "test233@example.com", // required
  "password": "test", // required
}
```

<span style="color: green">Login a User Response (200 OK)</span>:

```javascript
{
  "message": "Welcome Tester Three!",
  "user_id": 3,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE1NjkzMDA3NTUsImV4cCI6MTU2OTM4NzE1NX0.MqSP9WknoX-hqVuhPxcqgeMDUyt9DA4nU34OjTQLo2k"
}
```

<span style="color: red">Unauthorized Response (401 UNAUTHORIZED)</span>:

```javascript
{
  "message": "Invalid credentials."
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while logging in.",
  "err": err
}
```

###### PUT [UPDATE A USER]

```
https://corporate-event-planner-be.herokuapp.com/api/users/:id
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:
- ID is defined over the used route at the end
- Authorization gets validated over restricted middleware
- USER ID gets validated over validateUserId middleware
- USER gets validated over validateUser middleware
- payload.email gets validated over validateUniqueEmail middleware

Example Request Body:

```javascript
{
  "email": "test233@example.com", // required
  "password": "test", // required
  "name": "Tester Three", // required
  "company": "Testers Inc", // required
  "role": "tester" // required
}
```

<span style="color: green">Updating a User Response (201 CREATED)</span>:

```javascript
{
  id: 3,
  name: "Tester Three",
  email: "tester233@example.com",
  company: "Tester Inc.",
  role: "tester",
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while updating a user.",
  "err": err
}
```

###### DELETE [USER BY ID]

```
https://corporate-event-planner-be.herokuapp.com/api/users/:id
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:
- ID is defined over the used route at the end
- Authorization gets validated over restricted middleware
- USER ID gets validated over validateUserId middleware

<span style="color: green">Delete User By Id Response (200 OK)</span>:

```javascript
{
  message: `User with the id ${id} successfully deleted.`,
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while deleting user.",
  "err": err
}
```

<span style="color: red">User Not Found Response (404 NOT FOUND)</span>:

```javascript
{
  "message": `User with the id ${id} does not exist.`,
  "err": err
}
```

### Events

###### GET [ALL EVENTS]

```
https://corporate-event-planner-be.herokuapp.com/api/events
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:
- Authorization gets validated over restricted middleware

<span style="color: green">Get All Events Response (200 OK)</span>:

```javascript
[
  {
    id: 1,
    user_id: 1,
    name: "Company party",
    description: "A company-wide party",
    budget: "23230.00",
    location: "Building A, Room 232",
    start_date: "2019-01-21T00:00:00.000Z",
    end_date: "2019-01-23T00:00:00.000Z",
  },
  {
    id: 2,
    user_id: 1,
    name: "Company luncheon",
    description: "A company-wide lunch",
    budget: "12320.00",
    location: "Courtyard near the lobby",
    start_date: "2019-02-15T00:00:00.000Z",
    end_date: null,
  },
];
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while getting all events.",
  "err": err
}
```

###### GET [EVENT BY ID]

```
https://corporate-event-planner-be.herokuapp.com/api/events/:id
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:
- ID is defined over the used route at the end
- Authorization gets validated over restricted middleware
- EVENT ID gets validated over validateEventId middleware

<span style="color: green">Get Event By Id Response (200 OK)</span>:

```javascript
{
  "id": 1,
  "user_id": 1,
  "name": "Company party",
  "description": "A company-wide party",
  "budget": "23230.00",
  "location": "Building A, Room 232",
  "start_date": "2019-01-21T00:00:00.000Z",
  "end_date": "2019-01-23T00:00:00.000Z",
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while getting event by id.",
  "err": err
}
```

<span style="color: red">Event Not Found Response (404 NOT FOUND)</span>:

```javascript
{
  "message": `Event with the id ${id} does not exist.`,
  "err": err
}
```

###### POST [ADD AN EVENT]

```
https://corporate-event-planner-be.herokuapp.com/api/events
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:
- EVENT gets validated over validateEvent middleware

Example Request Body:

```javascript
{
  "user_id": 1, // required
  "name": "Company party", // required
  "description": "A company-wide party",
  "budget": "23230.00", // required
  "location": "Building A, Room 232",
  "start_date": "2019-01-21T00:00:00.000Z", // required
  "end_date": "2019-01-23T00:00:00.000Z"
}
```

<span style="color: green">Adding an Event Response (201 CREATED)</span>:

```javascript
{
  "id": 7,
  "user_id": 1,
  "name": "Company party",
  "description": "A company-wide party",
  "budget": "23230.00",
  "location": "Building A, Room 232",
  "start_date": "2019-01-21T00:00:00.000Z",
  "end_date": "2019-01-23T00:00:00.000Z"
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while adding an event.",
  "err": err
}
```

###### PUT [UPDATE AN EVENT]

```
https://corporate-event-planner-be.herokuapp.com/api/events/:id
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:
- ID is defined over the used route at the end
- Authorization gets validated over restricted middleware
- EVENT ID gets validated over validateEventId middleware
- EVENT gets validated over validateEvent middleware

Example Request Body:

```javascript
{
  "user_id": 1, // required
  "name": "Company party", // required
  "description": "A company-wide party",
  "budget": "23230.00", // required
  "location": "Building A, Room 232",
  "start_date": "2019-01-21T00:00:00.000Z", // required
  "end_date": "2019-01-23T00:00:00.000Z"
}
```

<span style="color: green">Updating an Event Response (201 CREATED)</span>:

```javascript
{
  "id": 7,
  "user_id": 1,
  "name": "Company party",
  "description": "A company-wide party",
  "budget": "23230.00",
  "location": "Building A, Room 232",
  "start_date": "2019-01-21T00:00:00.000Z",
  "end_date": "2019-01-23T00:00:00.000Z"
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while updating an event.",
  "err": err
}
```

###### DELETE [EVENT BY ID]

```
https://corporate-event-planner-be.herokuapp.com/api/events/:id
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:
- ID is defined over the used route at the end
- Authorization gets validated over restricted middleware
- EVENT ID gets validated over validateEventId middleware

<span style="color: green">Delete Event By Id Response (200 OK)</span>:

```javascript
{
  message: `Event with the id ${id} successfully deleted.`,
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while deleting event.",
  "err": err
}
```

<span style="color: red">Event Not Found Response (404 NOT FOUND)</span>:

```javascript
{
  "message": `Event with the id ${id} does not exist.`,
  "err": err
}
```

### Todos

###### GET [ALL TODOS]

```
https://corporate-event-planner-be.herokuapp.com/api/todos
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:
- Authorization gets validated over restricted middleware

<span style="color: green">Get All Todos Response (200 OK)</span>:

```javascript
[
  {
    id: 1,
    event_id: 1,
    name: "Send out invites",
    completed: false,
  },
  {
    id: 2,
    event_id: 1,
    name: "Set up decorations",
    completed: false,
  },
  {
    id: 3,
    event_id: 1,
    name: "Find catering services",
    completed: false,
  },
];
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while getting all todos.",
  "err": err
}
```

###### GET [TODO BY ID]

```
https://corporate-event-planner-be.herokuapp.com/api/todos/:id
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:
- ID is defined over the used route at the end
- Authorization gets validated over restricted middleware
- TODO ID gets validated over validateTodoId middleware

<span style="color: green">Get Todo By Id Response (200 OK)</span>:

```javascript
{
  id: 1,
  event_id: 1,
  name: "Send out invites",
  completed: false,
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while getting todo by id.",
  "err": err
}
```

<span style="color: red">Event Not Found Response (404 NOT FOUND)</span>:

```javascript
{
  "message": `Todo with the id ${id} does not exist.`,
  "err": err
}
```

###### POST [ADD A TODO]

```
https://corporate-event-planner-be.herokuapp.com/api/todos
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:
- TODO gets validated over validateTodo middleware

Example Request Body:

```javascript
{
  event_id: 1, // required
  name: "Send out invites", // required
  completed: false,
}
```

<span style="color: green">Adding an Todo Response (201 CREATED)</span>:

```javascript
{
  id: 8,
  event_id: 1,
  name: "Send out invites",
  completed: false,
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while adding a todo.",
  "err": err
}
```

###### PUT [UPDATE A TODO]

```
https://corporate-event-planner-be.herokuapp.com/api/todos/:id
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :heavy_check_mark:
- ID is defined over the used route at the end
- Authorization gets validated over restricted middleware
- TODO ID gets validated over validateTodoId middleware
- TODO gets validated over validateTodo middleware

Example Request Body:

```javascript
{
  event_id: 1, // required
  name: "Send out invites", //required
  completed: false,
}
```

<span style="color: green">Updating a Todo Response (201 CREATED)</span>:

```javascript
{
  id: 8,
  event_id: 1,
  name: "Send out invites",
  completed: false,
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while updating a todo.",
  "err": err
}
```

###### DELETE [TODO BY ID]

```
https://corporate-event-planner-be.herokuapp.com/api/todos/:id
```

- JWT protected (header) :heavy_check_mark:
- payload (body) :x:
- ID is defined over the used route at the end
- Authorization gets validated over restricted middleware
- TODO ID gets validated over validateTodoId middleware

<span style="color: green">Delete Todo By Id Response (200 OK)</span>:

```javascript
{
  message: `Todo with the id ${id} successfully deleted.`,
}
```

<span style="color: red">Server Error Response (500 SERVER ERROR)</span>:

```javascript
{
  "message": "Error occurred while deleting todo.",
  "err": err
}
```

<span style="color: red">Todo Not Found Response (404 NOT FOUND)</span>:

```javascript
{
  "message": `Todo with the id ${id} does not exist.`,
  "err": err
}
```

## Project Requirements and Documentation

- [Initial Project Description](https://airtable.com/shrXJLrenkHpSRWiV/tbln1vdyJbN0Nmte5/viwyGtoIo4bcAgYA1/reccKNI7YcY1wiEku?blocks=hide)

- [Technical Design Documentation](https://www.notion.so/Product-Vision-6227deb6c1a745cd96195e174e17dd77)

- [Role Description](https://www.notion.so/Backend-Developer-Node-33949b4ac12b47b1830b7a2f9dcbac6a)

- [Grading/Rubric - Backend Node Students](https://www.notion.so/04382aff1e09483dac0e29446ec4ef6f?v=3c1f346ae7b04962919385e74176d883)

## Authors

**Role: Backend Developer**

- **[Kevin Tou](https://github.com/KevinTou)**
- **[Lily Zhou](https://github.com/lilyhoratio)**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
