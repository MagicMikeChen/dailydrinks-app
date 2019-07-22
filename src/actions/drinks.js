import uuid from 'uuid';

//ADD_DRINK
export const AddDrink = (
  {
    name = '',
    note = '',
    amount = 0
  } = {}
) => ({
  type: 'ADD_DRINK',
  drink: {
    id: uuid(),
    name,
    note,
    amount
  }
});

//REMOVE_DRINK
export const removeDrink = ({ id } = {}) => ({
  type: 'REMOVE_DRINK',
  id
});

//EDIT_DRINK
export const editDrink = (id, updates) => ({
  type: 'EDIT_DRINK',
  id,
  updates
});
