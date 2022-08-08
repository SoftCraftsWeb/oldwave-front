import { items, paging, rating } from 'domain/reducers/item.reducer';
import { car } from 'domain/reducers/cart.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  items,
  paging,
  rating,
  car,
});

export default rootReducer;
