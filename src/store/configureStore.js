import { createStore, combineReducers} from 'redux';
import drinksReducer from '../reducers/drinks';


export default () => {
  const store = createStore(
    combineReducers({
      drinks: drinksReducer,
    }),
  );

  return store;
};
