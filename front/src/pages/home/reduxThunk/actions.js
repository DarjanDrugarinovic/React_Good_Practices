import {
  handleError,
  loading,
  setVoting,
  setQuotes,
  setQuotesCount,
  setTags
} from '../redux/slices';
import voteEnum from '../infrastructure/repository/quote/enums';
import {
  castDownvote,
  castUpvote,
  getQuotesNoParams,
  getQuotesWithParams,
  deleteDownvote,
  deleteUpvote
} from '../infrastructure/repository/quote';
import { getAllTags } from '../infrastructure/repository/tag';

export const votingAction =
  (newVote, oldVote, id) => async (dispatch, getState) => {
    const { home } = getState();
    const { quotes } = home;

    try {
      const dismissVote = newVote === oldVote;
      const upVote = newVote === voteEnum.upvote;
      const downVote = newVote === voteEnum.downvote;

      let updatedQuote = null;
      if (dismissVote && downVote) {
        updatedQuote = await deleteDownvote(id);
      }

      if (dismissVote && upVote) {
        updatedQuote = await deleteUpvote(id);
      }

      if (!dismissVote && downVote) {
        updatedQuote = await castDownvote(id);
      }

      if (!dismissVote && upVote) {
        updatedQuote = await castUpvote(id);
      }

      if (updatedQuote != null) {
        const updatedQuotes = quotes.map((quote) =>
          quote.id === updatedQuote.id ? updatedQuote : quote
        );
        dispatch(setQuotes(updatedQuotes));
        dispatch(setVoting(false));
      }
    } catch (err) {
      dispatch(handleError(err.message));
    } finally {
      dispatch(loading(false));
    }
  };

export const loadPage = () => async (dispatch, getState) => {
  try {
    dispatch(loading(true));
    const { quotesMap } = await getQuotesNoParams();
    dispatch(setQuotes(quotesMap));
  } catch (err) {
    dispatch(handleError(err.message));
  } finally {
    dispatch(loading(false));
  }
};

export const loadPageWithPaginationAndTags =
  (page, pageSize, chosenTags) => async (dispatch, getState) => {
    try {
      dispatch(loading(true));
      const { quotesCount, quotesMap } = await getQuotesWithParams(
        page,
        pageSize,
        chosenTags
      );

      const { tags } = await getAllTags();
      dispatch(setTags(tags));
      dispatch(setQuotesCount(quotesCount));
      dispatch(setQuotes(quotesMap));
    } catch (err) {
      dispatch(handleError(err.message));
    } finally {
      dispatch(loading(false));
    }
  };
