import axios from "axios";
import constants from "../constants.json";

const PostLogin = (username, passwordHash) => {
  return axios
    .post(constants.baseAddress + `auth/login`, { username, passwordHash })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export default PostLogin;
