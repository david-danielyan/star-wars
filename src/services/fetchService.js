import axios from "axios";
const API_URL = "https://swapi.dev/api/";
const axiosInstance = axios.create({
  baseURL: API_URL,
});
const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const fetchService = {
  get: async ({ url = API_URL, endPoint = "/", params = {}, headers = {} }) => {
    const config = {
      method: "GET",
      url: `${url}${endPoint}`,
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
      params,
    };
    return axiosInstance(config);
  },
};

export default fetchService;
