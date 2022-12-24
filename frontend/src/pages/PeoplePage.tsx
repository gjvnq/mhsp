import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function PeoplePage() {
  const theme = useTheme()
  return <div style={theme.typography}>
    <p>People page</p>
    <p><Link to="/myself">I/myself</Link></p>
    <p><Link to="/@darkwiiplayer">Darkwiiplayer</Link></p>
    <p><Link to="/settings">Settings</Link></p>
  </div>;
}
