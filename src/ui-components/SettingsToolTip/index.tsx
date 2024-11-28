import { Logout } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useHelper from "hooks/useHelper";
import { clearDataFromLocalStorage } from "utils/localStore";

export default function SettingsToolTip() {
  const { navigate } = useHelper();

  const handle_logout = () => {
    clearDataFromLocalStorage("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <List>
        <div style={{ padding: 10 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ListItemText>User Name</ListItemText>
            <ListItemText>The Dentist</ListItemText>
          </div>
        </div>
        <Divider />
        <ListItem onClick={handle_logout}>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
