exports.seed = function(knex) {
  return knex("todos").insert([
    { id: 1, event_id: 1, name: "Send out invites", completed: false },
    { id: 2, event_id: 1, name: "Set up decorations", completed: false },
    { id: 3, event_id: 1, name: "Find catering services", completed: false },
    { id: 4, event_id: 2, name: "Set up tables and chairs", completed: false },
    { id: 5, event_id: 2, name: "Pick up food", completed: false },
    {
      id: 6,
      event_id: 3,
      name: "Keep the ceo away from the banquest room",
      completed: false
    },
    { id: 7, event_id: 3, name: "Fill office with ballons", completed: false },
    { id: 8, event_id: 2, name: "Find entertainment", completed: false },
    { id: 9, event_id: 4, name: "Send out invitations", completed: false },
    { id: 10, event_id: 4, name: "Pick fun games to play", completed: false },
    { id: 11, event_id: 4, name: "Finish decorating", completed: false },
    { id: 12, event_id: 5, name: "Buy water ballons", completed: false },
    {
      id: 13,
      event_id: 5,
      name: "Bring drinks and sunscreen",
      completed: false
    },
    { id: 14, event_id: 6, name: "Call catering companies", completed: false },
    { id: 15, event_id: 6, name: "Invite magazine writers", completed: false }
  ]);
};
