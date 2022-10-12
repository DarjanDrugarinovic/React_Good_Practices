import urlBuilder from "../../../../../services/urlBuilder";
import * as services from "../../../../../services";

const filePath =
  "ShareKnowledge/front/src/pages/home/infrastructure/datasource/quote/index.js/";

export const getQuotesNoParamsDataSource = async () => {
  try {
    return await services.get(urlBuilder.base_url("/quotes"));
  } catch (err) {
    throw err;
  }
};

export const getQuotesSortAndFilterDataSource = async (paramsDTO) => {
  try {
    return await services.get(
      urlBuilder.withURLSearchParams("/quotes", paramsDTO)
    );
  } catch (err) {
    throw new Error(
      filePath + "getQuotesSortAndFilterDataSource \n" + err.message
    );
  }
};

export const getSingleQuoteDataSource = async (id) => {
  try {
    return await services.get(urlBuilder.urlWithSignleParam("/quotes", id));
  } catch (err) {
    throw err;
  }
};

export const createQuoteDataSource = async (DTO) => {
  try {
    return await services.postWithBodyNoParams(
      urlBuilder.base_url("/quotes"),
      DTO
    );
  } catch (err) {
    throw err;
  }
};

export const castUpvoteDataSource = async (id) => {
  try {
    return await services.postNoBodyWithParams(
      urlBuilder.urlWithMultipleParams("/quotes", `/${id}`, "/upvote")
    );
  } catch (err) {
    throw err;
  }
};

export const deleteUpvoteDataSource = async (id) => {
  try {
    return await services.deleteNoBodyWithParams(
      urlBuilder.urlWithMultipleParams("/quotes", `/${id}`, "/upvote")
    );
  } catch (err) {
    throw err;
  }
};

export const castDownvoteDataSource = async (id) => {
  try {
    return await services.postNoBodyWithParams(
      urlBuilder.urlWithMultipleParams("/quotes", `/${id}`, "/downvote")
    );
  } catch (err) {
    throw err;
  }
};

export const deleteDownvoteDataSource = async (id) => {
  try {
    return await services.deleteNoBodyWithParams(
      urlBuilder.urlWithMultipleParams("/quotes", `/${id}`, "/downvote")
    );
  } catch (err) {
    throw err;
  }
};
