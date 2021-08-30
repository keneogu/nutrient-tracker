import { POST_CURRENT_USER } from './actionType';

const postCurrentUser = (data) => ({
  type: POST_CURRENT_USER,
  payload: {
    id: data.id,
    username: data.username,
    token: data.token,
  },
});

export default postCurrentUser;
