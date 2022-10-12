import urlBuilder from '../../../../../services/urlBuilder';
import * as services from '../../../../../services';

export const getAllTagsDataSource = () => {
  return services.get(urlBuilder.base_url('/tags'));
};
