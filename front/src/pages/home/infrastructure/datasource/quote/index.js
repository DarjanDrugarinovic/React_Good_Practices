import urlBuilder from '../../../../../services/urlBuilder';
import * as services from '../../../../../services';

export const getQuotesNoParamsDataSource = async () => {
  return await services.get(urlBuilder.base_url('/quotes'));
};

export const getQuotesSortAndFilterDataSource = async (paramsDTO) => {
  return await services.get(
    urlBuilder.withURLSearchParams('/quotes', paramsDTO)
  );
};

export const getSingleQuoteDataSource = async (id) => {
  return await services.get(urlBuilder.urlWithSignleParam('/quotes', id));
};

export const createQuoteDataSource = async (DTO) => {
  return await services.postWithBodyNoParams(
    urlBuilder.base_url('/quotes'),
    DTO
  );
};

export const castUpvoteDataSource = async (id) => {
  return await services.postNoBodyWithParams(
    urlBuilder.urlWithMultipleParams('/quotes', `/${id}`, '/upvote')
  );
};

export const deleteUpvoteDataSource = async (id) => {
  return await services.deleteNoBodyWithParams(
    urlBuilder.urlWithMultipleParams('/quotes', `/${id}`, '/upvote')
  );
};

export const castDownvoteDataSource = async (id) => {
  return await services.postNoBodyWithParams(
    urlBuilder.urlWithMultipleParams('/quotes', `/${id}`, '/downvote')
  );
};

export const deleteDownvoteDataSource = async (id) => {
  return await services.deleteNoBodyWithParams(
    urlBuilder.urlWithMultipleParams('/quotes', `/${id}`, '/downvote')
  );
};
