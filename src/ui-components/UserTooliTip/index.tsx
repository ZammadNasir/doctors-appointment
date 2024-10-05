import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import favorite from "assets/images/global/favourite_icon.png";
import logout from "assets/images/global/logout.png";
import order_history from "assets/images/global/order_history.png";
import profile_icon from "assets/images/global/profile_icon.png";
import reward from "assets/images/global/reqwrd_icon.png";
import user_default from "assets/images/global/user_default.jpg";
import useHelper from "hooks/useHelper";
import { Link } from "react-router-dom";
import { clearDataFromLocalStorage } from "utils/localStore";

export default function UserToolTip() {
  const {  pathname } = useHelper();
  const handle_logout = () => {
    clearDataFromLocalStorage("token");
    window.location.reload();
  };

  return (
    <div>
      <List>
        <Link to="/user-profile">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/lab-tracking"}>
              <ListItemText>Lab Tracking</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/order-history">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/patients"}>
              <ListItemText>Patients</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/favorites">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/prefrences"}>
              <ListItemText>Prefrences</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/my-rewards">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/reports"}>
              <ListItemText>Reports</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <ListItem selected={pathname === "/admin/users"}>
          <ListItemButton>
            <ListItemText>Users</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
