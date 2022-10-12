export const mapperDTOViewModel = (dto) => {
  const { token, uloga } = dto;
  return {
    token,
    role: uloga
  };
};

export const mapperViewModelDTO = (model) => {
  const { token, role } = model;
  return {
    token,
    uloga: role
  };
};
