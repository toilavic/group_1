import { RestaurantMenu, StarRounded } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ReactMapGL, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import IStore from "../../data/stores/IStores";
import constants from "../../constants.json";

interface Props {
  stores: IStore[];
}

const fullscreenControlStyle = {
  right: 10,
  top: 10,
};
const navControlStyle = {
  right: 10,
  top: 40,
};
const geolocateControlStyle = {
  right: 10,
  top: 130,
};

const Showmap: React.FC<Props> = ({ stores }) => {
  const [viewport, setViewport] = useState({
    latitude: 65.0118734,
    longitude: 25.4716809,
    zoom: 12,
  });

  const [selectedStore, setSelectedStore]: any = useState(null);

  return (
    <>
      <ReactMapGL
        height='100%'
        width='100%'
        {...viewport}
        mapboxApiAccessToken={constants.MAPBOX_TOKEN}
        onViewportChange={(viewport: any) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navControlStyle} />
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
        {stores.map((store: any) => {
          return (
            <Marker
              key={store.id}
              latitude={store.location.coordinates[1]}
              longitude={store.location.coordinates[0]}
            >
              <Button
                variant="text"
                onClick={(event) => {
                  event.preventDefault();
                  setSelectedStore(store);
                }}
              >
                <RestaurantMenu color="error" fontSize="large" />
              </Button>
            </Marker>
          );
        })}
        {selectedStore ? (
          <Popup
            latitude={selectedStore.location.coordinates[1]}
            longitude={selectedStore.location.coordinates[0]}
            onClose={() => {
              setSelectedStore(null);
            }}
          >
            <Card elevation={0}>
              <CardHeader title={selectedStore.name} />
              <CardContent>
                <Typography>{selectedStore.address}</Typography>
                <StarRounded color="warning" fontSize="large" />
                <Typography>{selectedStore.price}</Typography>
              </CardContent>
            </Card>
          </Popup>
        ) : null}
      </ReactMapGL>
    </>
  );
};

export default Showmap;
