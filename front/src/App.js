import Router from "./router";
import React, { useEffect } from "react";
import ErrorDialog from "./components/errorDialog";
import { useSelector, useDispatch } from "react-redux";
import { loadApp } from "./reduxThunk/actions";
import { handleError } from "./redux/app/slices";
import Loader from "./components/loader";

function App() {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const { error, loading, token } = app;

  useEffect(() => {
    dispatch(loadApp());
  }, [dispatch, token]);

  useEffect(() => {
    localStorage.setItem("app", JSON.stringify(app));
  }, [app]);

  const viewToRender = (
    <>
      {loading ? <Loader app /> : null}
      {error ? <ErrorDialog error={error} handleError={handleError} /> : null}
      {/* <Router /> */}
    </>
  );

  return viewToRender;
}

export default App;
