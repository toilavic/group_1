import { makeStyles } from "@material-ui/core";
import { Star } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Showmap from "../../components/showmap/Showmap";
import { StoresContext } from "../../contexts/StoresContext";

const MapPage = () => {
    const { stores, auth, username, Logout, test } = useContext(StoresContext);
    //console.log("print stores in MapPage: ", stores);
    //console.log(test);
    

  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.brand}>
              <Link to="/" className={classes.linkBtn}>
                Haircut
              </Link>
            </Typography>
            {auth ? (
              <Stack direction="row" spacing={2}>
                <Button variant="text" color="inherit"
                onClick={Logout}
                >
                  <Typography variant="h6">LOGOUT</Typography>
                </Button>
                <Typography color="inherit">Welcome {username}</Typography>
              </Stack>
            ) : (
              <Stack direction="row" spacing={2}>
                <Typography variant="h6">
                  <Link to="/login" className={classes.linkBtn}>
                    LOGIN
                  </Link>
                </Typography>
                <Typography variant="h6">
                  <Link to="/register" className={classes.linkBtn}>
                    REGISTER
                  </Link>
                </Typography>
              </Stack>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={7}>
            <Grid container>
              { stores.map( (store ) => {
              return (
              <Grid item key={store.id} >
                <Paper elevation={3} className={classes.paperMap}>
                  <Typography>Address: {store.address}</Typography>
                  <Typography><Star /> {store.rate}</Typography>
                  <Typography>Price: {store.price}</Typography>
                  <Typography>Open Time: {store.openTime}</Typography>
                  <Typography>Puh: {store.contactNumber}</Typography>
                  <Typography>Description: {store.description}</Typography>
                  <Typography>Discount: {store.discountRate}</Typography>
                </Paper>
              </Grid>
              );
            })}
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Showmap stores = {stores} test = {test} />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Grid>
            {test.map((tam) => {
              return (
                <Grid item key={tam.id}>
                <Paper>
                  <Typography>{tam.address}</Typography>
                  <Typography>{tam.location.coordinates[0]}</Typography>
                  <Typography>{tam.location.coordinates[1]}</Typography>
                </Paper>
                </Grid>
              )
            })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

const useStyles = makeStyles((theme: any) => ({
  brand: {
    flexGrow: 1,
  },
  linkBtn: {
    textDecoration: "none",
    color: "white",
  },
  paperMap: {
      width: 250,
      height: 300,
      margin: 5,
      padding: 5,
      cursor: "pointer"
  },
}));

export default MapPage;
