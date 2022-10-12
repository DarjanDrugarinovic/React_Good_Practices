import {
  getQuotesNoParamsDataSource,
  getQuotesSortAndFilterDataSource,
  castUpvoteDataSource,
  deleteUpvoteDataSource,
  castDownvoteDataSource,
  deleteDownvoteDataSource
} from '../../datasource/quote';
import { mapperQuoteDTOViewModel, mapperQuotesDTOViewModel } from './mapper';

export const getQuotesNoParams = async () => {
  try {
    const dto = await getQuotesNoParamsDataSource();
    return mapperQuotesDTOViewModel(dto);
  } catch (err) {
    throw err;
  }
};

export const getQuotesWithParams = async (page, pageSize, chosenTags) => {
  try {
    const paramsDTO = {
      page,
      pageSize
    };

    if (chosenTags.length > 0) paramsDTO.tags = chosenTags;

    const dto = await getQuotesSortAndFilterDataSource(paramsDTO);
    return mapperQuotesDTOViewModel(dto);
  } catch (err) {
    throw err;
  }
};

export const deleteDownvote = async (id) => {
  try {
    const dto = await deleteDownvoteDataSource(id);
    return mapperQuoteDTOViewModel(dto);
  } catch (err) {
    throw err;
  }
};

export const deleteUpvote = async (id) => {
  try {
    const dto = await deleteUpvoteDataSource(id);
    return mapperQuoteDTOViewModel(dto);
  } catch (err) {
    throw err;
  }
};

export const castUpvote = async (id) => {
  try {
    const dto = await castUpvoteDataSource(id);
    return mapperQuoteDTOViewModel(dto);
  } catch (err) {
    throw err;
  }
};

export const castDownvote = async (id) => {
  try {
    const dto = await castDownvoteDataSource(id);
    return mapperQuoteDTOViewModel(dto);
  } catch (err) {
    throw err;
  }
};
