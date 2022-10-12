export const initialState = {
  token: '',
  role: 'guest',
  loggedIn: false,
  loading: true,
  error: null
};

const getState = () => {
  if (localStorage.getItem('app') === null)
    localStorage.setItem('app', JSON.stringify(initialState));

  return JSON.parse(localStorage.getItem('app'));
};

export default getState();
