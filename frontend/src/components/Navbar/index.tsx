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
      <AppBar color="inherit" position="static" elevation={0}>
        <Toolbar>
          <div className={classes.brand}>
            <Link to="/" className={classes.linkBtn}>
              <img src="https://i.pinimg.com/originals/04/0e/d9/040ed98defb52539c6ef68703fbde157.png" alt="logo" className={`${styles.imgLogo} ${classes.logo}`} />
            </Link>
          </div>
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
    flexGrow: 1,
  },
  linkBtn: {
    textDecoration: "none",
    marginLeft: '1rem',
  }
}));

export default Navbar;
