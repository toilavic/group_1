import axios from "axios";
import constants from "../constants.json";

const PostRegister = (username,name,passwordHash) => {
    axios.post(constants.baseAddress + `auth/register`, {username,name,passwordHash})
    .then(response => response)
    .catch((error) => console.log(error))
}

export default PostRegister