export const mapperTagsDTOViewModel = (dto) => {
  return {
    tags: dto
  };
};

export const mapperTagsViewModelDTO = (model) => {
  const { tags } = model;

  return {
    tags
  };
};
