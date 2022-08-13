import { items, paging, rating, item } from 'domain/reducers/item.reducer';
import { car } from 'domain/reducers/cart.reducer';
import { categories } from 'domain/reducers/category.reducer';
import { search } from 'domain/reducers/search.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  items,
  item,
  paging,
  rating,
  categories,
  car,
  search,
});

export default rootReducer;
