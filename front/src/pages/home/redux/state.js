const initialState = {
  loading: true,
  error: null,
  quotes: [],
  quotesCount: 0,
  tags: [],
  voting: false
};

const getState = () => {
  if (localStorage.getItem('home') === null)
    localStorage.setItem('home', JSON.stringify(initialState));

  return JSON.parse(localStorage.getItem('home'));
};

export default getState();
