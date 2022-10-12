import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { percentageStyle, arrowStyle } from './styles';
import voteEnum from '../../../../infrastructure/repository/quote/enums';
import { votingAction } from '../../../../reduxThunk/actions';
import { useSelector, useDispatch } from 'react-redux';
import { setVoting } from '../../../../redux/slices';

const Controlls = ({ id, downvotesCount, upvotesCount, givenVote }) => {
  const calculatePercentage = useCallback(
    () => Math.round((upvotesCount / (upvotesCount + downvotesCount)) * 100),
    [upvotesCount, downvotesCount]
  );

  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);
  const { voting } = home;
  const [percentage, setPercentage] = useState(calculatePercentage);

  const handleVoting = (vote) => {
    if (!voting) {
      dispatch(setVoting(true));
      dispatch(votingAction(vote, givenVote, id));
    }
  };

  useEffect(() => {
    if (!voting) setPercentage(calculatePercentage());
  }, [voting, calculatePercentage]);

  const viewToRender = (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={faCaretUp}
        style={arrowStyle(givenVote, voteEnum.upvote)}
        onClick={() => handleVoting(voteEnum.upvote)}
      />
      <p style={percentageStyle(percentage)} className={styles.percentage}>
        <b>{percentage}%</b>
      </p>
      <p className={styles.score}>
        <small>
          {upvotesCount} / {downvotesCount}
        </small>
      </p>
      <FontAwesomeIcon
        icon={faCaretDown}
        style={arrowStyle(givenVote, voteEnum.downvote)}
        onClick={() => handleVoting(voteEnum.downvote)}
      />
    </div>
  );

  return viewToRender;
};

export default Controlls;
