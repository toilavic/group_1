import {
  Button,
  Checkbox,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ChangeEvent, FC, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PostRegister from "../../api/PostRegister";
import { Form, Formik } from "formik";
import Wrapper from "../../components/Wrapper";
import InputField from "../../components/InputField";

const theme = createTheme();

const Register: FC = () => {
  let history = useHistory();
  const [username, setUsername] = useState<string>("");
  //const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [role, setRole] = useState<Boolean>();
  const [loi, setLoi] = useState<Boolean>(false);

  // const handleRegister = (event: ChangeEvent<HTMLInputElement>) => {
  //   PostRegister(username, name, password).then((response) => {
  //     console.log(response);
  //     if (response) {
  //       history.push("/login");
  //     }
  //   });
  //   event.preventDefault();
  // };

  const handleTest = (values: any) => {
    console.log(values);
    // PostRegister(username,fullname,password,role).then((response) => {
    //   if (response) {
    //     history.push("/login");
    //   }
    //   else {
    //     setLoi(true);
    //   }
    // })
  }

  //const onRegisterSubmit = values;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Wrapper>
          {loi && <Typography variant="caption">Something's wrong</Typography> }
          <Typography component="h1" variant="h5">
            REGISTER
          </Typography>

          <Formik
            initialValues={{ username: "", fullname: "", password: "", role }}
            onSubmit={handleTest}
          >
            {() => (
              <Form>
                <Grid container spacing={2}>
                    <InputField
                      name="username"
                      placeholder="Username"
                      label="Username"
                      type="text"
                    />
                    <InputField
                      name="fullname"
                      placeholder="Fullname"
                      label="fullname"
                      type="text"
                    />
                    <InputField
                      name="password"
                      placeholder="Password"
                      label="password"
                      type="password"
                    />
                    <Checkbox name="role"/>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    REGISTER
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
          {/* <Box component="form" onSubmit={handleRegister} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              REGISTER
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box> */}
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
