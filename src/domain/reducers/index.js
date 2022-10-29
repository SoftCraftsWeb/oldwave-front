import { items, paging, rating, item } from 'domain/reducers/item.reducer';
import { car } from 'domain/reducers/cart.reducer';
import { categories } from 'domain/reducers/category.reducer';
import { search } from 'domain/reducers/search.reducer';
import { combineReducers } from 'redux';
import { transactions, transaction } from 'domain/reducers/transaction.reducer';

const rootReducer = combineReducers({
  items,
  item,
  paging,
  rating,
  categories,
  car,
  search,
  transactions,
  transaction,
});

export default rootReducer;
