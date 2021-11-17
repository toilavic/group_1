import { RestaurantMenu, StarRounded } from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import interfaceStore from "../../data/stores/interfaceStore";
import IStore from "../../data/stores/IStores";

interface Props {
    stores: IStore[];
}

const Showmap: React.FC<Props> = ({ stores }) => {
    const MAPBOX_TOKEN = "pk.eyJ1IjoiYnJvdGhlcmQiLCJhIjoiY2t2NnYyeTN6MWc2ejJubzA3dmE1ajdsYSJ9.D2EEYvFB43G4_0JQYJn63w";

    const [viewport, setViewport] = useState({
        latitude: 65.0118734,
        longitude: 25.4716809,
        zoom: 12,
    });

    const [selectedRestaurant, setSelectedRestaurant]:any = useState(null);
    // console.log(selectedRestaurant);
    //console.log(typeof(stores));
    //console.log(stores);
    
    
    return (
        <div>
            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            height = {650}
            width = {1200}
            onViewportChange={(viewport:any)=>{
                setViewport(viewport)
            }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            > kakkaka
                {/* {stores.map((store: any) => {
                    return (
                        <Marker key={store.id} latitude={store.lat} longitude={store.long}>
                            <Button variant="text"
                            onClick={(event) => {
                                event.preventDefault();
                                setSelectedRestaurant(store);
                            }}
                            >
                                <RestaurantMenu color="error" fontSize="large"/>
                            </Button>
                        </Marker>
                    );
                })} */}
                {/* {selectedRestaurant ? (
                    <Popup latitude={selectedRestaurant.lat} longitude={selectedRestaurant.long}
                    onClose={()=>{setSelectedRestaurant(null)}}
                    >
                        <Card elevation={0} >
                            <CardHeader title={selectedRestaurant.name} />
                            <CardContent>
                                <Typography>{selectedRestaurant.address}</Typography>
                                <StarRounded color="warning" fontSize="large" />
                                <Typography>{selectedRestaurant.price}</Typography>
                            </CardContent>
                        </Card>
                    </Popup>
                ) : null} */}
            </ReactMapGL>


            {/*
            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            height = {650}
            width = {1200}
            onViewportChange={(viewport:any)=>{
                setViewport(viewport)
            }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                {test.map((tam: any) => {
                    return (
                        <Marker key={tam.id} latitude={tam.location.coordinates[1]} longitude={tam.location.coordinates[0]}>
                            <Button variant="text"
                            onClick={(event) => {
                                event.preventDefault();
                                setSelectedRestaurant(tam);
                            }}
                            >
                                <RestaurantMenu color="error" fontSize="large"/>
                            </Button>
                        </Marker>
                    );
                })}
                {selectedRestaurant ? (
                    <Popup latitude={selectedRestaurant.location.coordinates[1]} longitude={selectedRestaurant.location.coordinates[0]}
                    onClose={()=>{setSelectedRestaurant(null)}}
                    >
                        <Card elevation={0} >
                            <CardHeader title={selectedRestaurant.name} />
                            <CardContent>
                                <Typography>{selectedRestaurant.address}</Typography>
                                <StarRounded color="warning" fontSize="large" />
                                <Typography>{selectedRestaurant.price}</Typography>
                            </CardContent>
                        </Card>
                    </Popup>
                ) : null}
            </ReactMapGL>
            */}

        </div>
    )
}

export default Showmap
