import {
  Menu,
  Notifications,
  Search
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import useHelper from "hooks/useHelper";
import { Link } from "react-router-dom";
import CreateToolTip from "ui-components/CreateToolTip";
import SettingsToolTip from "ui-components/SettingsToolTip";
import CustomToolTip from "ui-components/Tooltip";
import UserToolTip from "ui-components/UserTooliTip";
import { handleOpen } from "../../../store/drawerReducer";
import LogoSection from "../LogoSection";

export default function Header({
  classes,
}: {
  classes: Record<string, never>;
}) {
  const { isMobile, dispatch, navigate } = useHelper();

  return (
    <header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: 20,
          paddingBlock: 8,
          border: "1px solid lightgrey",
        }}
      >
        {isMobile && (
          <IconButton onClick={() => dispatch(handleOpen())}>
            <Menu />
          </IconButton>
        )}

        <div style={{ alignSelf: "center" }}>
          <LogoSection width={70} />
        </div>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="Poppins-Regular fs-14"
        >
          <Link style={{ color: "black" }} to={"/admin/dashboard"}>
            Dashboard
          </Link>
          <Link style={{ color: "black" }} to={"/admin/appointments"}>
            Appointments
          </Link>
          <Link style={{ color: "black" }} to={"/admin/doctors"}>
            Doctors
          </Link>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <CustomToolTip
            title={<CreateToolTip />}
            width={120}
            height={"auto"}
            show_arrow={false}
          >
            <div
              className="pointer"
              style={{
                background: "#11438f",
                color: "#fff",
                padding: "2px 14px",
                fontSize: 14,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Create</p>
                <ExpandMoreIcon />
              </div>
            </div>
          </CustomToolTip>

          <div style={{ display: "flex" }}>
            <div>
              <p className="fs-14">The Dentist</p>
              <span className="fs-12">ID: 321356</span>
            </div>
            <CustomToolTip
              title={<SettingsToolTip />}
              width={200}
              height={"auto"}
              show_arrow={false}
            >
              <ExpandMoreIcon style={{ cursor: "pointer" }} />
            </CustomToolTip>
          </div>
        </div>
      </div>
    </header>
  );
}
