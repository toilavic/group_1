import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ChangeEvent, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { StoresContext } from "../../contexts/StoresContext";

const Login = () => {
  const {Login, auth} = useContext(StoresContext)
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    Login(username, password);
    event.preventDefault();
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      {!auth ? (
        <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            LOG IN
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              required
              fullWidth
              margin="normal"
              label="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              LOG IN
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2">
                  <Link to="/">Forgot password?</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <Link to="/register">Don't have an account? Register</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      ) : <Redirect to="/map" />
    }
    </ThemeProvider>
  );
};

export default Login;
