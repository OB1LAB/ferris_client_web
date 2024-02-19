import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import useWindowDimensions from "../useWindowDimensions";
import { INDEX_ROUTE, ACTIVITY_ROUTE } from "../../router/const";
import { Nav, Toggle } from "rsuite";
import Pc from "@rsuite/icons/legacy/Pc";
import HomeIcon from "@rsuite/icons/legacy/Home";
import Sun from "@rsuite/icons/legacy/SunO";
import Moon from "@rsuite/icons/legacy/MoonO";
import Server from "@rsuite/icons/legacy/Server";
import classes from "./Navigations.module.scss";

const Navigation = () => {
  const { store } = useContext(Context);
  const location = useLocation();
  const { width } = useWindowDimensions();
  const getColor = (path) => {
    if (path === location.pathname) {
      return `rs-nav-item-active ${classes.navItem}`;
    }
    return "";
  };
  return (
    <Nav appearance="subtle" className={classes.navBar}>
      <Nav.Item
        as={Link}
        to={ACTIVITY_ROUTE}
        className={getColor(ACTIVITY_ROUTE)}
        icon={<Pc />}
      >
        {width >= 700 && "Игровая активность"}
      </Nav.Item>
      <Nav.Item
        as={Link}
        to={INDEX_ROUTE}
        className={getColor(INDEX_ROUTE)}
        icon={<HomeIcon />}
      >
        {width >= 700 && "Информация"}
      </Nav.Item>
      <Nav.Menu icon={<Server />} title={store.selected_server} >
        <Nav.Menu title={"HTC 1.7.10"}>
          <Nav.Item active={store.selected_server === "HTC Titan"} onClick={() => store.setSelectedServer("HTC Titan")}>
            HTC Titan
          </Nav.Item>
          <Nav.Item active={store.selected_server === "HTC Phobos"} onClick={() => store.setSelectedServer("HTC Phobos")}>
            HTC Phobos
          </Nav.Item>
          <Nav.Item active={store.selected_server === "HTC Elara"} onClick={() => store.setSelectedServer("HTC Elara")}>
            HTC Elara
          </Nav.Item>
        </Nav.Menu>
        <Nav.Menu title={"TM 1.7.10"}>
          <Nav.Item active={store.selected_server === "TM Phoenix"} onClick={() => store.setSelectedServer("TM Phoenix")}>
            TM Phoenix
          </Nav.Item>
          <Nav.Item active={store.selected_server === "TM Orion"} onClick={() => store.setSelectedServer("TM Orion")}>
            TM Orion
          </Nav.Item>
        </Nav.Menu>
        <Nav.Menu title={"HTC 1.12"}>
          <Nav.Item active={store.selected_server === "HTC 1.12 #1"} onClick={() => store.setSelectedServer("HTC 1.12 #1")}>
            HTC 1.12 #1
          </Nav.Item>
          <Nav.Item active={store.selected_server === "HTC 1.12 #2"} onClick={() => store.setSelectedServer("HTC 1.12 #2")}>
            HTC 1.12 #2
          </Nav.Item>
          <Nav.Item active={store.selected_server === "HTC 1.12 #3"} onClick={() => store.setSelectedServer("HTC 1.12 #3")}>
            HTC 1.12 #3
          </Nav.Item>
          <Nav.Item active={store.selected_server === "HTC 1.12 #4"} onClick={() => store.setSelectedServer("HTC 1.12 #4")}>
            HTC 1.12 #4
          </Nav.Item>
          <Nav.Item active={store.selected_server === "HTC 1.12 #5"} onClick={() => store.setSelectedServer("HTC 1.12 #5")}>
            HTC 1.12 #5
          </Nav.Item>
          <Nav.Item active={store.selected_server === "HTC 1.12 #6"} onClick={() => store.setSelectedServer("HTC 1.12 #6")}>
            HTC 1.12 #6
          </Nav.Item>
        </Nav.Menu>
        <Nav.Menu title={"HTC 1.19"}>
          <Nav.Item active={store.selected_server === "HTC 1.19 #1"} onClick={() => store.setSelectedServer("HTC 1.19 #1")}>
            HTC 1.19 #1
          </Nav.Item>
          <Nav.Item active={store.selected_server === "HTC 1.19 #2"} onClick={() => store.setSelectedServer("HTC 1.19 #2")}>
            HTC 1.19 #2
          </Nav.Item>
          <Nav.Item active={store.selected_server === "HTC 1.19 #3"} onClick={() => store.setSelectedServer("HTC 1.19 #3")}>
            HTC 1.19 #3
          </Nav.Item>
          <Nav.Item active={store.selected_server === "HTC 1.19 #4"} onClick={() => store.setSelectedServer("HTC 1.19 #4")}>
            HTC 1.19 #4
          </Nav.Item>
          <Nav.Item active={store.selected_server === "HTC 1.19 #5"} onClick={() => store.setSelectedServer("HTC 1.19 #5")}>
            HTC 1.19 #5
          </Nav.Item>
        </Nav.Menu>
        <Nav.Menu title={"HardEvolution "}>
          <Nav.Item active={store.selected_server === "Hard Osiris"} onClick={() => store.setSelectedServer("Hard Osiris")}>
            Hard Osiris
          </Nav.Item>
          <Nav.Item active={store.selected_server === "Hard Anubis"} onClick={() => store.setSelectedServer("Hard Anubis")}>
            Hard Anubis
          </Nav.Item>
          <Nav.Item active={store.selected_server === "Hard Isida"} onClick={() => store.setSelectedServer("Hard Isida")}>
            Hard Isida
          </Nav.Item>
          <Nav.Item active={store.selected_server === "Hard Neftida"} onClick={() => store.setSelectedServer("Hard Neftida")}>
            Hard Neftida
          </Nav.Item>
          <Nav.Item active={store.selected_server === "Hard Bastet"} onClick={() => store.setSelectedServer("Hard Bastet")}>
            Hard Bastet
          </Nav.Item>
        </Nav.Menu>
        <Nav.Menu title={"Pixelmon 1.12"}>
          <Nav.Item active={store.selected_server === "Pixelmon №1"} onClick={() => store.setSelectedServer("Pixelmon №1")}>
            Pixelmon №1
          </Nav.Item>
          <Nav.Item active={store.selected_server === "Pixelmon №2"} onClick={() => store.setSelectedServer("Pixelmon №2")}>
            Pixelmon №2
          </Nav.Item>
          <Nav.Item active={store.selected_server === "Pixelmon №3"} onClick={() => store.setSelectedServer("Pixelmon №3")}>
            Pixelmon №3
          </Nav.Item>
        </Nav.Menu>
        <Nav.Item active={store.selected_server === "GalaxyCraft"} onClick={() => store.setSelectedServer("GalaxyCraft")}>
          GalaxyCraft
        </Nav.Item>
        <Nav.Item active={store.selected_server === "GregTech"} onClick={() => store.setSelectedServer("GregTech")}>
          GregTech
        </Nav.Item>
        <Nav.Item active={store.selected_server === "TMRPG"} onClick={() => store.setSelectedServer("TMRPG")}>
          TMRPG
        </Nav.Item>
        <Nav.Item active={store.selected_server === "LazorCraft"} onClick={() => store.setSelectedServer("LazorCraft")}>
          LazorCraft
        </Nav.Item>
      </Nav.Menu>
      <Nav.Item
        as={Toggle}
        checkedChildren={<Sun />}
        unCheckedChildren={<Moon />}
        defaultChecked={localStorage.getItem("theme") === "light"}
        onChange={(checked) => store.changeTheme(checked)}
      ></Nav.Item>
    </Nav>
  );
};

export default observer(Navigation);
