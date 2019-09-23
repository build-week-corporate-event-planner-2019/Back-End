exports.seed = function(knex) {
  return knex("todos").insert([
    { id: 1, event_id: 1, todo: "Send out invites", completed: false },
    { id: 2, event_id: 1, todo: "Set up decorations", completed: false },
    { id: 3, event_id: 1, todo: "Find catering services", completed: false },
    { id: 4, event_id: 2, todo: "Set up tables and chairs", completed: false },
    { id: 5, event_id: 2, todo: "Pick up food", completed: false },
    {
      id: 6,
      event_id: 3,
      todo: "Keep the ceo away from the banquest room",
      completed: false,
    },
    { id: 7, event_id: 3, todo: "Fill office with ballons", completed: false },
    { id: 8, event_id: 2, todo: "Find entertainment", completed: false },
    { id: 9, event_id: 4, todo: "Send out invitations", completed: false },
    { id: 10, event_id: 4, todo: "Pick fun games to play", completed: false },
    { id: 11, event_id: 4, todo: "Finish decorating", completed: false },
    { id: 12, event_id: 5, todo: "Buy water ballons", completed: false },
    {
      id: 13,
      event_id: 5,
      todo: "Bring drinks and sunscreen",
      completed: false,
    },
    { id: 14, event_id: 6, todo: "Call catering companies", completed: false },
    { id: 15, event_id: 6, todo: "Invite magazine writers", completed: false },
  ]);
};
