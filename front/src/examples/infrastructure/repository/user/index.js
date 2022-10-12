import { getStudent as getStudentDataSource } from '../../datasource/user';
import { createStudent as createStudentDataSource } from '../../datasource/user';
import { mapperDTOViewModel, mapperViewModelDTO } from './mapper';

export const createGuestAuthentication = async (id) => {
  try {
    const dto = await getStudentDataSource(id);
    return mapperDTOViewModel(dto);
  } catch (err) {
    throw err;
  }
};

export const createStudent = (student) => {
  try {
    const dto = mapperViewModelDTO(student);
    const createdStudent = createStudentDataSource(dto);
    return createdStudent;
  } catch (err) {
    throw err;
  }
};
