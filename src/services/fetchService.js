import axios from "axios";
const API_URL = "https://swapi.dev/api/";
const axiosInstance = axios.create({
  baseURL: API_URL,
});
const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
// const fetch = ({
//   url = API_URL,
//   endPoint = "/",
//   body = {},
//   method = "GET",
//   headers = {},
// }) => {
//   let config = {
//     method,
//     url: `${url}${endPoint}`,
//     data: body,
//   };

//   config.headers = {
//     ...DEFAULT_HEADERS,
//     ...headers,
//   };

//   if (method === "GET") {
//     config.params = body;
//   }
//   return axiosInstance(config);
// };
const fetchService = {
  get: (url = API_URL, endPoint = "/", params = {}, headers = {}) => {
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
