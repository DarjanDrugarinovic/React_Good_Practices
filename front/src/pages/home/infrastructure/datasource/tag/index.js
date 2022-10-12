import urlBuilder from '../../../../../services/urlBuilder';
import * as services from '../../../../../services';

export const getAllTagsDataSource = () => {
  try {
    return services.get(urlBuilder.base_url('/tags'));
  } catch (err) {
    throw err;
  }
};
