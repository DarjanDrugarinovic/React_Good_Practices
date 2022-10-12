/**
 * Used as QuoteDTO
 *
 * @param {String[]} tags
 */
const QuoteDTO = {
  id: '',
  content: '',
  author: '',
  tags: [],
  userId: '',
  upvotesCount: 0,
  downvotesCount: 0,
  createdAt: '',
  givenVote: ''
};

/**
 * Used as QuotesDTO
 *
 * @param {QuoteDTO} quotes
 */
const QuotesDTO = {
  quotesCount: '',
  quotes: []
};

/**
 * Used for post request "Create quote"
 *
 * @param {String[]} tags
 */
const CreateQuoteDTO = {
  content: '',
  author: '',
  tags: []
};

/**
 * Used for post request "Get quotes (sort and filter)"
 *
 * @param {String[]} tags
 * @param {Number} page
 * @param {Number} pageSize
 * @param {String} sortBy
 * @param {String} sortDirection
 */

const QuotesSortAndFilterDTO = {
  tags: undefined,
  page: undefined,
  pageSize: undefined,
  sortBy: undefined,
  sortDirection: undefined
};
