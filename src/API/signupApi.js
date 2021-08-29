import axiosInstance from '../utils/axiosInstance';

const signupApi = async ({ username, password }) => {
  const { data } = await axiosInstance.post('/v1/users', {
    user: {
      username,
      password,
    },
  });

  return data;
};

export default signupApi;