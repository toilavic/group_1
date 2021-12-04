
import { useEffect, useState } from "react";

import ReactMapGL, {
    Marker,
} from "react-map-gl";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import constants from "../../constants.json";

interface Props {
    coordinates: Array<number>
}

const ShowmapMini: React.FC<Props> = ({ coordinates }) => {

    const [viewport, setViewport] = useState({
        latitude: 65.0118734,
        longitude: 25.4716809,
        zoom: 17,
    });

    useEffect(() => {
        const selectedStore = {
            ...viewport,
            latitude: coordinates ? coordinates[1] : viewport.latitude,
            longitude: coordinates ? coordinates[0] : viewport.longitude,
        };
        setViewport(selectedStore)
    }, [coordinates])

    return (
        <>
            <ReactMapGL
                height='100%'
                width='100%'
                {...viewport}
                mapboxApiAccessToken={constants.MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                <Marker
                    latitude={viewport.latitude}
                    longitude={viewport.longitude}
                >
                    <LocationOnIcon fontSize="large"/>
                </Marker>
            </ReactMapGL>
        </>
    );
};

export default ShowmapMini;
