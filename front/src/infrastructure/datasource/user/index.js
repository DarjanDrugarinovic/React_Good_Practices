import * as services from '../../../services';
import urlBuilder from '../../../../../services/urlBuilder';

export const createGuestAuthenticationDataSource = () => {
  try {
    return services.get(urlBuilder.base_url('/tags'));
  } catch (err) {
    throw err;
  }
};
