import { makeStyles } from "@material-ui/core";
import { Star } from "@mui/icons-material";
import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { StoresContext } from "../../../contexts/StoresContext";

const MapLeft = () => {

  const { stores } = useContext(StoresContext);
  const classes = useStyles();
  const totalStores = stores.length
  return (
    <>
      <h2>Select between {totalStores} barber shops in the area</h2>
      <h3>Here would be sort and filter</h3>
      {/* style here just for example */}
      <Grid container style = {{backgroundColor: 'blue', height: '75vh'}}>
        <h3>Stores</h3>
        {stores.map((store) => {
          return (
            <Grid item key={store.id} >
              <Paper elevation={3} className={classes.paperMap}>
                <Typography>Address: {store?.address}</Typography>
                <Typography><Star /><span>{store?.rate}</span></Typography>
                <Typography>Price: {store?.price}</Typography>
                <Typography>Open Time: {store?.opentime}</Typography>
                <Typography>Puh: {store?.contact_number}</Typography>
                <Typography>Description: {store?.description}</Typography>
                <Typography>Discount: {store?.discount_rate}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>

  );
};

const useStyles = makeStyles((theme: any) => ({
  paperMap: {
    width: 250,
    height: 580,
    margin: 5,
    padding: 5,
    cursor: "pointer"
  },
}));

export default MapLeft;
