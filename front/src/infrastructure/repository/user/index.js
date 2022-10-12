import { createGuestAuthenticationDataSource } from '../../datasource/user';
import { mapperDTOViewModel } from './mapper';

export const createGuestAuthentication = async () => {
  const dto = await createGuestAuthenticationDataSource();
  return mapperDTOViewModel(dto);
};
