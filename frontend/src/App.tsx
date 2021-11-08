import { BrowserRouter, Route, Switch } from "react-router-dom";
import StoresContextProvider from "./contexts/StoresContext";
import "./global.css";
import HomePage from "./pages/homepage/HomePage";
import MapPage from "./pages/map/MapPage";

const App: React.FC = () => {
  return (
    <StoresContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/map" component={MapPage} />
        </Switch>
      </BrowserRouter>
    </StoresContextProvider>
  );
};

export default App;
