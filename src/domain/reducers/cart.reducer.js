import services from 'domain/services';

const initialState = [];

export function getCar(search, paging) {
  return async function action(dispatch) {
    dispatch({ type: 'car', payload: services.car.list(search, paging) });
  };
}

export function addItem(cart, item) {
  return async function action(dispatch) {
    dispatch({ type: 'car', payload: services.car.store(cart, item) });
  };
}

export function removeItem(cart, item) {
  return async function action(dispatch) {
    dispatch({ type: 'car', payload: services.car.remove(cart, item) });
  };
}

export function car(state = initialState, action = initialState) {
  switch (action.type) {
    case 'car':
      return action.payload;
    default:
      return state;
  }
}
