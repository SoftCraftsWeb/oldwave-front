import services from 'domain/services';

const initialState = [];

export function searchItems(search, category, paging, setIsLoading) {
  return async function action(dispatch) {
    const response = await services.item.list(
      search,
      category,
      paging,
      setIsLoading
    );
    dispatch({ type: 'items/search', payload: response });
  };
}

export function getItem(id, setIsLoading) {
  return async function action(dispatch) {
    const response = await services.item.show(id, setIsLoading);
    dispatch({ type: 'items/show', payload: response });
  };
}

export function getRating(setIsLoading) {
  return async function action(dispatch) {
    const response = await services.item.rating(setIsLoading);
    dispatch({ type: 'items/rating', payload: response });
  };
}

export function item(state = initialState, action = initialState) {
  switch (action.type) {
    case 'items/show':
      return action.payload;
    default:
      return state;
  }
}

export function items(state = initialState, action = initialState) {
  switch (action.type) {
    case 'items/search':
      return action.payload.results;
    default:
      return state;
  }
}

export function rating(state = initialState, action = initialState) {
  switch (action.type) {
    case 'items/rating':
      return action.payload;
    default:
      return state;
  }
}

export function paging(state = initialState, action = initialState) {
  switch (action.type) {
    case 'items/search':
      return action.payload.paging;
    default:
      return state;
  }
}
