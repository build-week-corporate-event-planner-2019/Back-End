exports.seed = function(knex) {
  return knex("vendors").insert([
    { id: 1, name: "Tom's Chair Emporium", event_id: 1, notes: null },
    { id: 2, name: "Bill's Tables", event_id: 2, notes: null },
    { id: 3, name: "Mama's Kitchen", event_id: 3, notes: null },
    { id: 4, name: "Ballooooooooons", event_id: 1, notes: null },
    { id: 5, name: "Gina's Glassware", event_id: 2, notes: null },
    { id: 6, name: "Fork and Spoons Store", event_id: 5, notes: null },
    { id: 7, name: "TTT - That Taco Truck", event_id: 6, notes: null }
  ]);
};
