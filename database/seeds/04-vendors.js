exports.seed = function(knex) {
  return knex("vendors").insert([
    { id: 1, vendor: "Tom's Chair Emporium" },
    { id: 2, vendor: "Bill's Tables" },
    { id: 3, vendor: "Mama's Kitchen" },
    { id: 4, vendor: "Ballooooooooons" },
    { id: 5, vendor: "Gina's Glassware" },
    { id: 6, vendor: "Fork and Spoons Store" },
    { id: 7, vendor: "TTT - That Taco Truck" },
  ]);
};
