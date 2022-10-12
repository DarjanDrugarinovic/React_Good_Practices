import Student from './model';

export const mapperDTOViewModel = (dto) => {
  const { index, firstName, lastName, grade } = dto;
  return {
    index,
    grade,
    name: firstName + ' ' + lastName
  };
};

export const mapperViewModelDTO = (model) => {
  const { index, grade, name } = model;
  return {
    index,
    grade,
    firstName: name.firstName,
    lastName: name.lastName
  };
};
