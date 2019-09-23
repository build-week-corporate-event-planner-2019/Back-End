exports.seed = function(knex) {
  return knex("events_vendors").insert([
    { event_id: 1, vendor_id: 1, notes: null },
    { event_id: 1, vendor_id: 2, notes: null },
    { event_id: 1, vendor_id: 3, notes: null },
    { event_id: 1, vendor_id: 5, notes: null },
    { event_id: 1, vendor_id: 6, notes: null },
    { event_id: 2, vendor_id: 1, notes: null },
    { event_id: 2, vendor_id: 2, notes: null },
    { event_id: 2, vendor_id: 3, notes: null },
    { event_id: 2, vendor_id: 5, notes: null },
    { event_id: 2, vendor_id: 6, notes: null },
    { event_id: 2, vendor_id: 7, notes: null },
    { event_id: 3, vendor_id: 4, notes: null },
    { event_id: 3, vendor_id: 3, notes: null },
    { event_id: 3, vendor_id: 5, notes: null },
    { event_id: 3, vendor_id: 6, notes: null },
    { event_id: 4, vendor_id: 4, notes: null },
    { event_id: 5, vendor_id: 7, notes: null },
    { event_id: 6, vendor_id: 7, notes: null },
  ]);
};
