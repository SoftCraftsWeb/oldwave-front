import services from 'domain/services';

const initialState = [];

export function getTransactions(setIsLoading) {
  return async function action(dispatch) {
    const response = await services.transactions.index(setIsLoading);
    dispatch({ type: 'transactions/index', payload: response });
  };
}

export function getTransaction(reference, setIsLoading) {
  return async function action(dispatch) {
    const response = await services.transactions.show(reference, setIsLoading);
    dispatch({ type: 'transactions/show', payload: response });
  };
}

export function transaction(state = initialState, action = initialState) {
  switch (action.type) {
    case 'transactions/show':
      return action.payload ?? {};
    default:
      return state;
  }
}

export function transactions(state = initialState, action = initialState) {
  switch (action.type) {
    case 'transactions/index':
      return action.payload;
    default:
      return state;
  }
}
