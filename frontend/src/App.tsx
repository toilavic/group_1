import { BrowserRouter, Route, Switch } from "react-router-dom";
import StoresContextProvider from "./contexts/StoresContext";
import "./global.css";
import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/login/Login";
import MapPage from "./pages/map/MapPage";
import Register from "./pages/register/Register";

const App: React.FC = () => {
  return (
    <StoresContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/map" component={MapPage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </StoresContextProvider>
  );
};

export default App;
