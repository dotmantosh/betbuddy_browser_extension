import axios from "axios";
const url = 'https://www.sportybet.com/api/ng'

const Api = () => {
  return axios.create({
    baseURL: url,
  });
};

export default Api