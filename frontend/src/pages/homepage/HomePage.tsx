import { Box, Button, Container, Typography,  } from "@mui/material";
import { makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom";

const HomePage = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.container}>
            This is Homepage componentashgdasd
            <Box className={classes.boxMap}>
                <Button variant="contained">
                    <Link to="/map" className={classes.linkMap}>
                        <Typography>
                            Go to map
                        </Typography>
                    </Link>
                </Button>
            </Box>
        </Container>
    )
}

const useStyles = makeStyles({
    container: {
        backgroundImage: `url(https://t4.ftcdn.net/jpg/01/27/80/91/240_F_127809115_9RmW6yYLlOmU52aWw3a2dsDLXsyTy8dx.jpg)`,
    },
    boxMap: {
        height: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(https://www.rtisthairstudio.com/wp-content/uploads/voodoo-hair-lounge-boulder-colorado.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 90%",
    },
    linkMap: {
        textDecoration: "none"
    },
})

export default HomePage
