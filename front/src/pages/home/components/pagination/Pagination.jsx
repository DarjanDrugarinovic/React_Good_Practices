import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './styles.module.css';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const calcutePageNumbers = useCallback(() => {
    let startPage, endPage;
    if (nPages >= 5) {
      if (currentPage < 3) {
        startPage = 0;
        endPage = 4;
      } else if (currentPage > nPages - 2) {
        startPage = nPages - 5;
        endPage = nPages - 1;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    } else {
      startPage = 0;
      endPage = nPages - 1;
    }

    const allPageNumbers = [...Array(nPages + 1).keys()].slice(1);
    return allPageNumbers.slice(startPage, endPage + 1);
  }, [currentPage, nPages]);

  const [pageNumbers, setPageNumbers] = useState(calcutePageNumbers);
  const prevCurrentPageRef = useRef(currentPage);
  const prevCurrentPage = prevCurrentPageRef.current;

  useEffect(() => {
    setPageNumbers(calcutePageNumbers());
  }, [nPages, calcutePageNumbers]);

  useEffect(() => {
    if (prevCurrentPage !== currentPage) {
      setPageNumbers(calcutePageNumbers());
    }
  }, [calcutePageNumbers, currentPage, prevCurrentPage]);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul
        className={`${styles['pagination']} ${styles['justify-content-center']} `}
      >
        <li className={styles['page-item']}>
          <button className={styles['page-link']} onClick={prevPage}>
            Previous
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`${styles['page-item']} ${
              currentPage === pgNumber ? styles['active'] : ''
            } `}
          >
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className={styles['page-link']}
            >
              {pgNumber}
            </button>
          </li>
        ))}
        <li className={styles['page-item']}>
          <button className={styles['page-link']} onClick={nextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
