import axios from "axios";
const config = "http://10.0.2.2:8080/api/";
export const request = (url, method, data) => {
  return axios({
    method: method,
    url: config + url,
    data: data,
  })
    .then((res) => res.data)
    .catch((error) => {
      console.log("API Requested fail!", error);
      throw error;
    });
};
