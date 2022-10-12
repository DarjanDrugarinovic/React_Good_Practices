import axios from "axios";

const service = async (url) => {
  const bearer = "Bearer " + JSON.parse(localStorage.getItem("app")).token;
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        Authorization: bearer,
      },
    });
    return res.data;
  } catch (error) {
    if (error.response) {
      // Request made but the server responded with an error
      console.log(error);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      throw new Error(
        `code: ${error.code}\n` +
          `status: ${error.response.status}\n` +
          `message: ${error.message}\n` +
          `data: ${error.response.data}`
      );
    } else if (error.request) {
      // Request made but no response is received from the server.
      console.log(error.request);
      throw new Error(
        "service: Request made but no response is received from the server"
      );
    } else {
      // Error occured while setting up the request
      console.log("Error", error.message);
      throw new Error("service: Error occured while setting up the request");
    }
  }
};

export default service;
