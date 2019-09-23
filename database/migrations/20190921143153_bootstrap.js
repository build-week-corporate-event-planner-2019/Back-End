exports.up = function(knex) {
  return (
    knex.schema
      // users - id, email, password, name, company, role
      .createTable("users", users => {
        users.increments();
        users
          .string("email")
          .unique()
          .notNullable();
        users.string("password").notNullable();
        users.string("name").notNullable();
        users.string("company"); // .notNullable();
        users.string("role"); // notNullable();
      })
      // events - id, user_id, name, description, budget, location, start_date, end_date,
      .createTable("events", events => {
        events.increments();
        events
          .integer("user_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("users")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        events.string("name").notNullable();
        events.string("description");
        events.decimal("budget").notNullable();
        events.string("location");
        events.date("start_date").notNullable();
        events.date("end_date"); // Maybe change later to have a default value
      })
      // todos - id, event_id, todo, completed
      .createTable("todos", todos => {
        todos.increments();

        todos
          .integer("event_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("events")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        todos.string("name").notNullable();
        todos.boolean("completed").defaultTo(false);
      })
      // vendors - id, vendor
      .createTable("vendors", vendors => {
        vendors.increments();
        vendors
          .string("name")
          .unique()
          .notNullable();
        vendors.string("notes");
        vendors
          .integer("event_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("events")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })
      // items - id, event_id, item, quantity, cost, completed
      .createTable("items", items => {
        items.increments();
        items
          .integer("event_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("events")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        items.string("name").notNullable();
        items.integer("quantity");
        items.decimal("cost").notNullable();
        items.boolean("completed").defaultTo(false);
      })
    // events_vendors - event_id, vendor_id, notes
    // .createTable("events_vendors", events_vendors => {
    //   events_vendors
    //     .integer("event_id")
    //     .unsigned()
    //     .notNullable()
    //     .references("id")
    //     .inTable("events")
    //     .onDelete("CASCADE")
    //     .onUpdate("CASCADE");
    //   events_vendors
    //     .integer("vendor_id")
    //     .unsigned()
    //     .notNullable()
    //     .references("id")
    //     .inTable("vendors")
    //     .onDelete("CASCADE")
    //     .onUpdate("CASCADE");
    //   events_vendors.primary(["event_id", "vendor_id"]);
    //   events_vendors.text("notes");
    // })
  );
};

exports.down = function(knex) {
  return (
    knex.schema
      // .dropTableIfExists("events_vendors")
      .dropTableIfExists("items")
      .dropTableIfExists("vendors")
      .dropTableIfExists("todos")
      .dropTableIfExists("events")
      .dropTableIfExists("users")
  );
};
