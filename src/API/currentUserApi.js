import axiosInstance from '../utils/axiosInstance';

const currentUserApi = async () => {
  const { data } = await axiosInstance.get('/v1/sessions');
  return data;
};

export default currentUserApi;
