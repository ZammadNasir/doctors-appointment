import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useHelper from "hooks/useHelper";
import { Link } from "react-router-dom";

export default function CreateToolTip() {
  const {  pathname } = useHelper();

  return (
    <div>
      <List>
        <Link to="/admin/appointments/details">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/appointments/details"}>
              <ListItemText>Appointment</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/admin/doctor/details/">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/doctor/details"}>
              <ListItemText>Doctor</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
      </List>
    </div>
  );
}
