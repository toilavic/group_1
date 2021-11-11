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
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    //console.log("email: ", email, "password: ", password);
    //Login(email,password);
    console.log(email, password);
    event.preventDefault();
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
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
              label="Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
    </ThemeProvider>
  );
};

export default Login;
