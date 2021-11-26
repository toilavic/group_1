import Showmap from "../../showmap/Showmap";

import { useContext } from "react";
import { StoresContext } from "../../../contexts/StoresContext";

const MapRight = () => {

    const { stores } = useContext(StoresContext);

    return (
        <div style = {{height: '90vh', width: '40vw'}}>
            <Showmap stores={stores} />
        </div>

    );
};

export default MapRight;
