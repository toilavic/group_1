import constants from "../constants.json";
import axios from "axios";

const GetAllStores = () => {
    return (
        axios.get(constants.baseAddress + 'items')
        .then(response => response.data)
        .catch((error) => console.log(error))
    )
}

export default GetAllStores
