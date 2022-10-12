import { getAllTagsDataSource } from '../../datasource/tag';
import { mapperTagsDTOViewModel } from './mapper';

export const getAllTags = async () => {
  const dto = await getAllTagsDataSource();
  return mapperTagsDTOViewModel(dto);
};
