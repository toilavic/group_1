import { BrowserRouter, Route, Switch } from "react-router-dom";
import StoresContextProvider from "./contexts/StoresContext";
import "./global.css";
// import Login from "./pages/login/Login";
import MainContent from "./components/MainContent";
// import Register from "./pages/register/Register";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles'
const App: React.FC = () => {

  const theme = createTheme({
    typography: {
      "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 100,
      "fontWeightRegular": 300,
      "fontWeightMedium": 500
     }
  });

  return (
    <StoresContextProvider>
      <BrowserRouter>
        <Switch>
          <>
            <ThemeProvider theme={theme}>
              <Navbar />
              <Route path="/" component={MainContent} />
              {/* <Route path="/register" component={Register} />
            <Route path="/login" component={Login} /> */}
            </ThemeProvider>
          </>
        </Switch>
      </BrowserRouter>
    </StoresContextProvider>
  );
};

export default App;
