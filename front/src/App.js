import Router from './router';
import React, { useEffect } from 'react';
import ErrorDialog from './components/errorDialog';
import { useSelector, useDispatch } from 'react-redux';
import { loadApp } from './reduxThunk/actions';
import { handleError } from './redux/app/slices';
import Loader from './components/loader';

function App() {
  const dispatch = useDispatch();
  // const app = useSelector((state) => state.app);
  // const { error, loading, token } = app;
  const error = useSelector((state) => state.app.error);
  const loading = useSelector((state) => state.app.loading);
  const token = useSelector((state) => state.app.token);

  useEffect(() => {
    dispatch(loadApp());
  }, [dispatch, token]);

  // useEffect(() => {
  //   localStorage.setItem('app', JSON.stringify(app));
  // }, [app]);

  const viewToRender = (
    <>
      {loading ? (
        <Loader app />
      ) : error ? (
        <ErrorDialog error={error} handleError={handleError} />
      ) : (
        <Router />
        //Fore some reason Home component in Router is causing one more App render,
        //try return null and everything is fine
      )}
    </>
  );

  console.log('App rendered');
  return viewToRender;
}

export default App;
