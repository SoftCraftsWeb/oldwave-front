import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from 'domain/reducers';

const rootReducer = (state, action) =>
  reducer(action.type === 'RESET_APP' ? null : state, action);

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
