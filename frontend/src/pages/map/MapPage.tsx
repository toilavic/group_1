import { makeStyles } from "@material-ui/core";
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
import { Link } from "react-router-dom";

const MapPage = () => {
  const auth = false;

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
                <Button variant="text" color="inherit">
                  <Typography variant="h6">LOGOUT</Typography>
                </Button>
                <Typography color="inherit">Welcome admin</Typography>
              </Stack>
            ) : (
              <Stack direction="row" spacing={2}>
                <Typography variant="h6">
                  <Link to="/" className={classes.linkBtn}>
                    LOGOUT
                  </Link>
                </Typography>
                <Typography variant="h6">
                  <Link to="/" className={classes.linkBtn}>
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
              <Grid item>
                <Paper elevation={3} className={classes.paperMap}>
                  <Typography>Address: </Typography>
                  <Typography>Price: </Typography>
                  <Typography>Open Time: </Typography>
                  <Typography>Puh: </Typography>
                  <Typography>Description: </Typography>
                  <Typography>Discount: </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={5}>Map will be showed here</Grid>
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
