import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "./main";
import Navigation from "./components/NavBar/Navigation";
import StaffService from "./services/StaffService";
import "./App.scss";
import "rsuite/dist/rsuite.min.css";
import InfoService from "./services/InfoService";
import { CustomProvider } from "rsuite";
import AppRouter from "./components/NavBar/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { store } = useContext(Context);

  const getStaff = async () => {
    try {
      const response = await StaffService.getStaff();
      store.setStaff(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getServerInfo = async () => {
    try {
      const response = await InfoService.get();
      store.setLastLogsUpdate(response.data.last_update)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStaff();
    getServerInfo();
  }, []);

  return (
    <CustomProvider theme={store.theme}>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <AppRouter />
        </BrowserRouter>
      </div>
    </CustomProvider>
  );
}

export default observer(App);
