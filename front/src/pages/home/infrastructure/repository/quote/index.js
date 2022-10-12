import {
  getQuotesNoParamsDataSource,
  getQuotesSortAndFilterDataSource,
  castUpvoteDataSource,
  deleteUpvoteDataSource,
  castDownvoteDataSource,
  deleteDownvoteDataSource,
} from "../../datasource/quote";
import { mapperQuoteDTOViewModel, mapperQuotesDTOViewModel } from "./mapper";

export const getQuotesNoParams = async () => {
  const dto = await getQuotesNoParamsDataSource();
  return mapperQuotesDTOViewModel(dto);
};

export const getQuotesWithParams = async (page, pageSize, chosenTags) => {
  const paramsDTO = {
    page,
    pageSize,
  };

  if (chosenTags.length > 0) paramsDTO.tags = chosenTags;

  const dto = await getQuotesSortAndFilterDataSource(paramsDTO);
  return mapperQuotesDTOViewModel(dto);
};

export const deleteDownvote = async (id) => {
  const dto = await deleteDownvoteDataSource(id);
  return mapperQuoteDTOViewModel(dto);
};

export const deleteUpvote = async (id) => {
  const dto = await deleteUpvoteDataSource(id);
  return mapperQuoteDTOViewModel(dto);
};

export const castUpvote = async (id) => {
  const dto = await castUpvoteDataSource(id);
  return mapperQuoteDTOViewModel(dto);
};

export const castDownvote = async (id) => {
  const dto = await castDownvoteDataSource(id);
  return mapperQuoteDTOViewModel(dto);
};
