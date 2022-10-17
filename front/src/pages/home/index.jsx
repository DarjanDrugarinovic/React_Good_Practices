import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import ErrorDialog from '../../components/errorDialog';
import Loader from '../../components/loader';
import { handleError } from './redux/slices';
// import { loadPage } from './reduxThunk/actions';
import { loadPageWithPaginationAndTags } from './reduxThunk/actions';
import { useDispatch } from 'react-redux';
import Quote from './components/quote';
import Pagination from './components/pagination/Pagination';
import Filter from './components/filter';

const currentPageDefault = 1;
const quotesPerPageDefault = 5;

const Home = () => {
  const home = useSelector((state) => state.home);
  const { error, loading, quotes, quotesCount } = home;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(currentPageDefault);
  const [quotesPerPage] = useState(quotesPerPageDefault);
  const nPages = Math.ceil(quotesCount / quotesPerPage);
  const [chosenTags, setChosenTags] = useState([]);
  const prevChosenTagsRef = useRef(chosenTags);
  const prevChosenTags = prevChosenTagsRef.current;

  useEffect(() => {
    // dispatch(loadPage()); //loading all quotes, no pagination, no tags
  }, [dispatch]);

  useEffect(() => {
    if (prevChosenTags !== chosenTags) {
      setCurrentPage(currentPageDefault);

      dispatch(
        loadPageWithPaginationAndTags(
          currentPageDefault,
          quotesPerPageDefault,
          chosenTags
        )
      );
    } else {
      dispatch(
        loadPageWithPaginationAndTags(currentPage, quotesPerPage, chosenTags)
      );
    }
  }, [dispatch, currentPage, quotesPerPage, chosenTags, prevChosenTags]);

  // useEffect(() => {
  //   localStorage.setItem('home', JSON.stringify(home));
  // }, [home]);

  const viewToRender = (
    <>
      <h1 className={styles.heading}>Quotes</h1>
      <Filter setChosenTags={setChosenTags} />

      {quotes.map((quote, index) => (
        <Quote quoteViewModel={quote} key={index} />
      ))}

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {loading ? <Loader /> : null}
      {error ? <ErrorDialog error={error} handleError={handleError} /> : null}
    </>
  );
  console.log('Home rendered');

  return viewToRender;
};

export default Home;
