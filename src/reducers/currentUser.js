import Cookies from 'js-cookie';
import { TOKEN_NAME } from '../constants';
import { POST_CURRENT_USER } from '../actions/actionType';

const initialState = {
  id: '',
  username: '',
  token: '',
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CURRENT_USER:
      Cookies.set(TOKEN_NAME, action.payload.token);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default currentUserReducer;
