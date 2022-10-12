import * as urls from './urls.js';
import * as services from '../../../services';
export const getPosts = '/home/getPosts';

export const getStudent = () => {
  return services.get(urls.guestLoginRoute);
};

export const createStudent = (DTO) => {
  return services.post(urls.guestLoginRoute, DTO);
};
