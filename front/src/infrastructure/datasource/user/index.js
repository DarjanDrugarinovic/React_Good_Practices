import * as services from "../../../services";
import urlBuilder from "../../../services/urlBuilder";

export const createGuestAuthenticationDataSource = () => {
  return services.get(urlBuilder.base_url("/tags"));
};
