import { BrowserRouter, Route, Switch }       from "react-router-dom";
import StoresContextProvider                  from "./contexts/StoresContext";
// Component

// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import MainContent                            from "./components/MainContent";
import Navbar                                 from "./components/Navbar";

// Style
import { ThemeProvider }                      from "@material-ui/core";
import { createTheme }                        from '@material-ui/core/styles'
import "./global.css";

const App: React.FC = () => {

  const theme = createTheme({
    typography: {
      "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
     }
  });

  return (
    <StoresContextProvider>
      <BrowserRouter>
        <Switch>
          <>
            <ThemeProvider theme={theme}>
              <Navbar />
              <Route exact path="/" component={MainContent} />
              {/* <Route path="/login" component={Login} /> */}
              {/* <Route path="/register" component={Register} /> */}
            </ThemeProvider>
          </>
        </Switch>
      </BrowserRouter>
    </StoresContextProvider>
  );
};

export default App;
