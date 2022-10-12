import { getAllTagsDataSource } from '../../datasource/tag';
import { mapperTagsDTOViewModel } from './mapper';

export const getAllTags = async () => {
  try {
    const dto = await getAllTagsDataSource();
    return mapperTagsDTOViewModel(dto);
  } catch (err) {
    throw err;
  }
};
