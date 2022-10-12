export const mapperQuoteDTOViewModel = (dto) => {
  const {
    id,
    content,
    author,
    tags,
    userId,
    upvotesCount,
    downvotesCount,
    createdAt,
    givenVote
  } = dto;
  return {
    id,
    content,
    author,
    tags,
    userId,
    upvotesCount,
    downvotesCount,
    createdAt,
    givenVote
  };
};

export const mapperQuoteViewModelDTO = (model) => {
  const {
    id,
    content,
    author,
    tags,
    userId,
    upvotesCount,
    downvotesCount,
    createdAt,
    givenVote
  } = model;
  return {
    id,
    content,
    author,
    tags,
    userId,
    upvotesCount,
    downvotesCount,
    createdAt,
    givenVote
  };
};

export const mapperQuotesDTOViewModel = (dto) => {
  const { quotesCount, quotes } = dto;
  const quotesMap = quotes.map((quote) => mapperQuoteDTOViewModel(quote));

  return {
    quotesCount,
    quotesMap
  };
};

export const mapperQuotesViewModelDTO = (model) => {
  const { quotesCount, quotes } = model;
  const quotesMap = quotes.map((quote) => mapperQuoteViewModelDTO(quote));

  return {
    quotesCount,
    quotesMap
  };
};

export const mapperCreateQuoteDTOViewModel = (dto) => {
  const { content, author, tags } = dto;
  return {
    id: 0,
    content,
    author,
    tags,
    userId: 0,
    upvotesCount: 0,
    downvotesCount: 0,
    createdAt: '',
    givenVote: ''
  };
};

export const mapperQuoteViewModelCreateQuoteDTO = (model) => {
  const { content, author, tags } = model;
  return {
    content,
    author,
    tags
  };
};
