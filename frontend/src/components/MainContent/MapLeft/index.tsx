import { makeStyles } from "@material-ui/core";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box
} from "@mui/material";
import { CardActionArea } from '@mui/material';

import { useContext } from "react";
import { StoresContext } from "../../../contexts/StoresContext";

interface Props {
  selectStore: (id: string) => any;
}

const MapLeft: React.FC<Props> = ({ selectStore }) => {

  const { stores, getRateColor, getAvgRate, getDeductedPrice } = useContext(StoresContext);
  const classes = useStyles();
  const totalStores = stores.length || 0
  console.log(stores)

  const DEFAULT_STORE_URL = "https://i.pinimg.com/originals/70/88/36/708836ce6b5cd801c2b33fc4f3feb476.jpg"

  return (
    <>
      <h2>Select between {totalStores} barber shops in the area</h2>
      <h3>Here would be sort and filter</h3>
      {/* style here just for example */}
      <Box style={{ maxHeight: '81vh', maxWidth: '100wh', overflow: 'auto' }}>
        <Grid container style={{ alignItems: 'space-between', justifyContent: 'center' }} >
          {stores.map((store: any) => {
            return (
              <Card sx={{ maxWidth: 345 }} className={classes.paperMap} key = {store?.id} onClick = {() => selectStore(store?.id)} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={DEFAULT_STORE_URL}
                    alt="green iguana"
                  />
                  <CardContent>
                    <h2>{store?.name} &nbsp;
                    <span style={{color: 'red'}}>{store?.discount_rate ? `-${store?.discount_rate}%` : ''}</span>
                    </h2>
                    <h3>{store?.address}</h3>
                    <h3 style = {{color: getRateColor(getAvgRate(store?.rate))} || 'green'}>{getAvgRate(store?.rate) || 0} ★ {` (${store?.rate.length || 0})`}</h3>
                    <h3>{
                    store?.discount_rate > 0 ? 
                    `Original ${store?.price}€  => ${getDeductedPrice(store?.price, store?.discount_rate)}€` :
                    `${store?.price}€`}
                    </h3>
                    <h3>Open from: 10:00 AM
                      {/* {store?.opentime} */}
                    </h3>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Grid>
      </Box>
    </>

  );
};

const useStyles = makeStyles((theme: any) => ({
  paperMap: {
    width: 310,
    margin: 5,
    padding: 5,
    cursor: "pointer"
  },
}));

export default MapLeft;
