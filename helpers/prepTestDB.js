const db = require("../database/db-config.js");

module.exports = () => {
  return db.migrate
    .rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
};
