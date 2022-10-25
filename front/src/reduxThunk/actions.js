import { loading, handleError } from '../redux/app/slices';
// import { setUser } from '../redux/app/slices';
import { createGuestAuthentication } from '../infrastructure/repository/user';

export const loadApp = () => async (dispatch, getState) => {
  try {
    // dispatch(loading(true));
    // const { token, role } = await createGuestAuthentication();
    // // dispatch(setUser({token, role, loggedIn: false}))
    // console.log(token);
  } catch (err) {
    dispatch(handleError(JSON.stringify(err, Object.getOwnPropertyNames(err))));
  } finally {
    dispatch(loading(false));
  }
};
