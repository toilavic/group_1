import axios from "axios";
import constants from "../constants.json";

const PostRegister = (username, fullname, passwordHash, role) => {
  return axios
    .post(constants.baseAddress + `auth/register`, {
      username,
      fullname,
      passwordHash,
      role
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export default PostRegister;
