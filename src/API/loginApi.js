import axiosInstance from '../utils/axiosInstance';

const loginApi = async ({ username, password }) => {
  const { data } = await axiosInstance.post('/v1/sessions', {
    session: {
      username,
      password,
    },
  });

  return data;
};

export default loginApi;