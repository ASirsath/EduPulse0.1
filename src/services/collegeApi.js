import axios from 'axios';

export const searchColleges = async (params) => {
  const response = await axios.get('/api/colleges/search', { params });
  return response.data;
};
