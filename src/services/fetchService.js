import axios from "axios";
// const API_URL = "https://swapi.dev/api/";
const axiosInstance = axios.create();
const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const fetchService = {
  get: async ({ endPoint = "/", params = {}, headers = {} }) => {
    const config = {
      method: "GET",
      url: `${endPoint}`,
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
