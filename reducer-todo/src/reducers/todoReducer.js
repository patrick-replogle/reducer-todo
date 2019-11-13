export const initialTodos = [
  {
    item: "Learn reducer patterns",
    completed: false,
    id: Date.now()
  },
  {
    item: "Beat Zelda",
    completed: false,
    id: Date.now()
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
