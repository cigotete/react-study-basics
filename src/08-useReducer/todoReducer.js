
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] add':
      return [...initialState, action.payload];

    case '[TODO] delete':
      return initialState.filter((todo) => todo.id !== action.payload);

    /*
    case '[TODO] toggle':
      return initialState.map((todo) =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo
      );
      */

    case '[TODO] toggle':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });

    default:
      return initialState;
  }
}