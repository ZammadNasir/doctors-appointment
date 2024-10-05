import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import useHelper from "hooks/useHelper";
import { Link } from "react-router-dom";
import Button from "ui-components/Button";
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
          paddingInline: isMobile ? 10 : 120,
          paddingBlock: 16,
          border: "1px solid lightgrey",
        }}
      >
        {/* {isMobile && (
          <IconButton onClick={() => dispatch(handleOpen())}>
            <Menu />
          </IconButton>
        )} */}

        <div style={{ alignSelf: isMobile ? "center" : "flex-start" }}>
          <LogoSection width={"100%"} height={"100%"} />
        </div>

        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="Poppins-Regular fs-14"
          >
            <Link style={{ color: "black" }} to={"/clinic"}>
              Clinic
            </Link>
            <Link style={{ color: "black" }} to={"/hospital"}>
              Hospital
            </Link>
            <Link style={{ color: "black" }} to={"/pharmacy"}>
              Pharmacy
            </Link>
            <Link style={{ color: "black" }} to={"/laboratory"}>
              Laboratory
            </Link>
          </div>
        )}
        <Button
          value={"Login"}
          variant="blue_outlined"
          onClick={() => navigate("login")}
          size={"small"}
          style={{width: 70, padding: "4px 12px"}}
        />
      </div>
    </header>
  );
}
