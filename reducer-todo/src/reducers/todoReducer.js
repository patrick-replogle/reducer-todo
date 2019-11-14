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
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return [...state, newTodo];
    case "TOGGLE_COMPLETED":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case "CLEAR_TODO":
      return state.filter(todo => {
        return !todo.completed;
      });
    default:
      return state;
  }
};
