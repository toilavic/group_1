import axios from "axios";
import constants from "../constants.json";

const PostRegister = (username, name, passwordHash) => {
  return axios
    .post(constants.baseAddress + `auth/register`, {
      username,
      name,
      passwordHash,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export default PostRegister;
