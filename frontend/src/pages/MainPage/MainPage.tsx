import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";

import "./MainPage.css";
import { Outlet, useNavigate } from "react-router";

import { useLocation } from "react-router-dom";

function MainPage() {
  const location = useLocation();
  const current_tab = (() => {
    switch (location.pathname) {
      case "/myself":
        return 0;
      case "/people":
        return 1;
      case "/settings":
        return 2;
      default:
        return 1;
    }
  })();
  let navigate = useNavigate();
  return (
    <div id="_main_app">
      <div id="_content">
        <Outlet />
      </div>
      <Paper id="_bottom_nav" elevation={3}>
        <BottomNavigation
          showLabels
          value={current_tab}
          onChange={(_, newValue) => {
            switch (newValue) {
              case 0:
                navigate("/myself");
                break;
              case 1:
                navigate("/people");
                break;
              case 2:
                navigate("/settings");
                break;
              default:
                break;
            }
          }}
        >
          <BottomNavigationAction label="Myself" icon={<AccountCircleIcon />} />
          <BottomNavigationAction label="People" icon={<PeopleIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default MainPage;
