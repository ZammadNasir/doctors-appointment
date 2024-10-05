import {
  Announcement,
  ContactEmergency,
  Headphones,
  Logout,
  Settings,
} from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Switch } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useHelper from "hooks/useHelper";
import { Link } from "react-router-dom";
import { clearDataFromLocalStorage } from "utils/localStore";

export default function SettingsToolTip() {
  const { pathname, navigate } = useHelper();

  const handle_logout = () => {
    clearDataFromLocalStorage("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <List>
        <div style={{ padding: 10}}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ListItemText>User</ListItemText>
              <ListItemText>The Dentist</ListItemText>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                New OPD Design
                <Switch />
              </div>
            </div>
          </div>
          <Divider />
        <Link to="/admin/user-settings">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/user-settings"}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText>User Settings</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/admin/priority-modules">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/priority-modules"}>
              <ListItemIcon>
                <FileOpenIcon />
              </ListItemIcon>
              <ListItemText>Priority Modules</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/admin/contacts">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/contacts"}>
              <ListItemIcon>
                <ContactEmergency />
              </ListItemIcon>
              <ListItemText>Contacts</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/billing">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/billing"}>
              <ListItemIcon>
                <CreditCardIcon />
              </ListItemIcon>
              <ListItemText>Billing</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/admin/support">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/support"}>
              <ListItemIcon>
                <Headphones />
              </ListItemIcon>
              <ListItemText>Billing</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/admin/audit-logs">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/audit-logs"}>
              <ListItemIcon>
                <AutoStoriesIcon />
              </ListItemIcon>
              <ListItemText>Audit Logs</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/admin/admin-settings">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/admin-settings"}>
              <ListItemIcon>
                <FilterAltIcon />
              </ListItemIcon>
              <ListItemText>Admin Settings</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/admin/whats-new">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/whats-new"}>
              <ListItemIcon>
                <Announcement />
              </ListItemIcon>
              <ListItemText>What's New</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
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
