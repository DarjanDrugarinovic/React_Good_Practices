import * as urls from './urls.js';
import * as services from '../../../services';
export const getPosts = '/home/getPosts';

export const getStudent = () => {
  try {
    return services.get(urls.guestLoginRoute);
  } catch (err) {
    throw err;
  }
};

export const createStudent = (DTO) => {
  try {
    return services.post(urls.guestLoginRoute, DTO);
  } catch (err) {
    throw err;
  }
};
