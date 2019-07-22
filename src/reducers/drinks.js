
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_DRINK':
      return [
        ...state,
        action.drink
      ];
    case 'REMOVE_DRINK':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_DRINK':
      return state.map((drink) => {
        if (drink.id === action.id) {
          return {
            ...drink,
            ...action.updates
          };
        } else {
          return drink;
        };
      })
      default:
        return state;
  }
}