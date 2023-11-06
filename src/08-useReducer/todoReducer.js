
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] add':
      return [...initialState, action.payload];

    default:
      return initialState;
  }
}