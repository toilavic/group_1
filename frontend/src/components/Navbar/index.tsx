import { makeStyles } from "@material-ui/core";
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoresContext } from "../../contexts/StoresContext";
import styles from './Navbar.module.css'
const Navbar = () => {
  const { Logout, auth } = useContext(StoresContext);

  const classes = useStyles();

  return (
    <>
        <AppBar color = "inherit" position="static" elevation={0}>
          <Toolbar>
            <img src="./logo.png" className={classes.logo}/>
            <Typography className={classes.brand}>
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
              </Stack>
            ) : (
              <Stack direction="row" spacing={6}>
                {/* <Typography variant="h6">
                  <Link to="/login" className={classes.linkBtn}>
                    LOGIN
                  </Link>
                </Typography> */}
                <button className={styles.btn}>
                  Contact us
                </button>
                <button className={`${styles.btn} ${styles.btnDark}`}>
                  Log in
                </button>
              </Stack>
            )}
          </Toolbar>
        </AppBar>
    </>

  );
};

const useStyles = makeStyles((theme: any) => ({
  logo: {
    maxWidth: 260,
    display: 'inline-block'
  },
  brand: {
    flexGrow: 2,
  },
  linkBtn: {
    textDecoration: "none",
    marginLeft: '6rem',
    display: 'inline-block',
    fontSize: '22px',
    '&:hover': {
      color: "#006241",
   },
  }
}));

export default Navbar;
