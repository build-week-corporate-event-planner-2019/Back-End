exports.seed = function(knex) {
  return knex("items").insert([
    {
      id: 1,
      event_id: 1,
      name: "picnic chairs",
      quantity: null,
      cost: 0,
      completed: false
    },
    {
      id: 2,
      event_id: 1,
      name: "picnic tables",
      quantity: null,
      cost: 0,
      completed: false
    },
    {
      id: 3,
      event_id: 1,
      name: "food",
      quantity: null,
      cost: 0,
      completed: false
    },
    {
      id: 4,
      event_id: 1,
      name: "drinks",
      quantity: null,
      cost: 0,
      completed: false
    },
    {
      id: 5,
      event_id: 1,
      name: "entertainment",
      quantity: null,
      cost: 0,
      completed: false
    },
    {
      id: 6,
      event_id: 2,
      name: "napkins",
      quantity: null,
      cost: 0,
      completed: false
    },
    {
      id: 7,
      event_id: 2,
      name: "taco trunk",
      quantity: null,
      cost: 0,
      completed: false
    },
    {
      id: 8,
      event_id: 2,
      name: "soda",
      quantity: null,
      cost: 1,
      completed: false
    },
    {
      id: 9,
      event_id: 3,
      name: "balloons",
      quantity: null,
      cost: 2,
      completed: false
    },
    {
      id: 10,
      event_id: 3,
      name: "catering",
      quantity: null,
      cost: 300,
      completed: false
    },
    {
      id: 11,
      event_id: 4,
      name: "stuffed animals",
      quantity: null,
      cost: 5,
      completed: false
    },
    {
      id: 12,
      event_id: 4,
      name: "food",
      quantity: null,
      cost: 0,
      completed: false
    },
    {
      id: 13,
      event_id: 5,
      name: "water balloons",
      quantity: null,
      cost: 0,
      completed: false
    },
    {
      id: 14,
      event_id: 5,
      name: "toy water guns",
      quantity: null,
      cost: 0,
      completed: false
    },
    {
      id: 15,
      event_id: 6,
      name: "gift bags",
      quantity: null,
      cost: 0,
      completed: false
    },
    {
      id: 16,
      event_id: 6,
      name: "catering",
      quantity: null,
      cost: 0,
      completed: false
    }
  ]);
};
