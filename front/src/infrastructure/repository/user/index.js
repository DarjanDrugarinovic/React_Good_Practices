import { createGuestAuthenticationDataSource } from '../../datasource/user';
import { mapperDTOViewModel } from './mapper';

export const createGuestAuthentication = async () => {
  try {
    const dto = await createGuestAuthenticationDataSource();
    return mapperDTOViewModel(dto);
  } catch (err) {
    throw err;
  }
};
