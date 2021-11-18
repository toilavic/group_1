import { RestaurantMenu, StarRounded } from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useState } from "react";
import ReactMapGL, { FullscreenControl, GeolocateControl, Marker, NavigationControl, Popup } from "react-map-gl";
import interfaceStore from "../../data/stores/interfaceStore";
import IStore from "../../data/stores/IStores";

interface Props {
    stores: IStore[];
}

const fullscreenControlStyle = {
    right: 10,
    top: 10
  }
  const navControlStyle= {
    right: 10,
    top: 40
  };
  const geolocateControlStyle= {
    right: 10,
    top: 130
  };

const Showmap: React.FC<Props> = ({ stores }) => {
    const MAPBOX_TOKEN = "pk.eyJ1IjoiYnJvdGhlcmQiLCJhIjoiY2t2NnYyeTN6MWc2ejJubzA3dmE1ajdsYSJ9.D2EEYvFB43G4_0JQYJn63w";

    const [viewport, setViewport] = useState({
        latitude: 65.0118734,
        longitude: 25.4716809,
        zoom: 12,
    });

    const [selectedStore, setSelectedStore]:any = useState(null);
    
    return (
        <div>
            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            height = {650}
            width = {600}
            onViewportChange={(viewport:any)=>{
                setViewport(viewport)
            }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            >kakkaka
            <FullscreenControl style={fullscreenControlStyle} />
            <NavigationControl style={navControlStyle} />
            <GeolocateControl style={geolocateControlStyle}
                positionOptions={{enableHighAccuracy: true}}
                trackUserLocation={true}
                auto
            />
                {stores.map((store: any) => {
                    return (
                        <Marker key={store.id} latitude={store.location.coordinates[1]} longitude={store.location.coordinates[0]}>
                            <Button variant="text"
                            onClick={(event) => {
                                event.preventDefault();
                                setSelectedStore(store);
                            }}
                            >
                                <RestaurantMenu color="error" fontSize="large"/>
                            </Button>
                        </Marker>
                    );
                })}
                {selectedStore ? (
                    <Popup latitude={selectedStore.location.coordinates[1]} longitude={selectedStore.location.coordinates[0]}
                    onClose={()=>{setSelectedStore(null)}}
                    >
                        <Card elevation={0} >
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
        </div>
    )
}

export default Showmap
