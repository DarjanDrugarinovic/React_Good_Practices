import React from 'react';
import styles from './styles.module.css';
import Content from './components/content';
import Controlls from './components/controlls';

const Quote = ({
  quoteViewModel: {
    author,
    content,
    downvotesCount,
    givenVote,
    id,
    upvotesCount
  }
}) => {
  const viewToRender = (
    <article className={styles.container}>
      <Controlls
        id={id}
        downvotesCount={downvotesCount}
        upvotesCount={upvotesCount}
        givenVote={givenVote}
      />
      <Content author={author} content={content} />
    </article>
  );

  return viewToRender;
};

export default Quote;
