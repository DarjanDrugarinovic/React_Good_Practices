import { getStudent as getStudentDataSource } from '../../datasource/user';
import { createStudent as createStudentDataSource } from '../../datasource/user';
import { mapperDTOViewModel, mapperViewModelDTO } from './mapper';

export const createGuestAuthentication = async (id) => {
  const dto = await getStudentDataSource(id);
  return mapperDTOViewModel(dto);
};

export const createStudent = (student) => {
  const dto = mapperViewModelDTO(student);
  const createdStudent = createStudentDataSource(dto);
  return createdStudent;
};
