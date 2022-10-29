export const getUser = () =>
  JSON.parse(sessionStorage.getItem('logged_user') ?? null);
