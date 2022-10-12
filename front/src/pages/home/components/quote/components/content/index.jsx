import React from 'react';
import styles from './styles.module.css';

const Content = ({ author, content }) => {
  const viewToRender = (
    <div className={styles.container}>
      <p className={styles.content}>{content}</p>
      <p className={styles.author}>— {author.toUpperCase()}</p>
    </div>
  );

  return viewToRender;
};

export default Content;
