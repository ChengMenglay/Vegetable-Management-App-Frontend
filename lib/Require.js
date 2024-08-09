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
  //   } catch (error) {
  // console.log("Cannot request api!", error);
  // if (error.response) {
  //   // The request was made and the server responded with a status code
  //   // that falls out of the range of 2xx
  //   console.log("Response data:", error.response.data);
  //   console.log("Response status:", error.response.status);
  //   console.log("Response headers:", error.response.headers);
  // } else if (error.request) {
  //   // The request was made but no response was received
  //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //   // http.ClientRequest in node.js
  //   console.log("Request data:", error.request);
  // } else {
  //   // Something happened in setting up the request that triggered an Error
  //   console.log("Error message:", error.message);
  // }
};
