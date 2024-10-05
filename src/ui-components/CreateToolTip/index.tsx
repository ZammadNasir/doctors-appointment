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
        <Link to="/admin/create/patients">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/create/patients"}>
              <ListItemText>Patients</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/admin/create/invoice">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/create/invoice"}>
              <ListItemText>Invoice</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/admin/create/health-record">
          <ListItem>
            <ListItemButton selected={pathname === "/admin/create/health-record"}>
              <ListItemText>Health Record</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
