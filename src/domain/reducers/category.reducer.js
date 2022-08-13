import services from 'domain/services';

const initialState = [];

export function getCategories(setIsLoading) {
  return async function action(dispatch) {
    const response = await services.category.list(setIsLoading);

    dispatch({ type: 'categories/index', payload: response });
  };
}

export function categories(state = initialState, action = initialState) {
  switch (action.type) {
    case 'categories/index':
      return action.payload;
    default:
      return state;
  }
}
