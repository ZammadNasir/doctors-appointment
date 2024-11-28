import logo from "assets/images/logos/footer-simple-logo.svg";
import google_play from "assets/images/global/playstore.svg";
import app_store from "assets/images/global/app-store.svg";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { Facebook, Twitter } from "@mui/icons-material";
import useHelper from "hooks/useHelper";

const links_container = {
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  marginTop: 18,
} as any;

export default function Footer({
  classes,
}: {
  classes: Record<string, never>;
}) {
  const { isMobile } = useHelper();
  return (
    <footer
      style={{
        background: "#1B293D",
        padding: isMobile ? "15px 10px 4px 10px" : "15px 100px 4px 100px",
      }}
    >
      <div
        style={{
          paddingTop: isMobile ? 20 : 40,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div>
          <div style={{ marginBottom: 12, marginLeft: 10 }}>
            <img src={logo} alt="Logo" />
          </div>
         
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)",
            color: "white",
            paddingLeft: isMobile ? 10 : 0,
          }}
        >
          <div>
            <h4 className="Poppins-Bold">Company</h4>
            <div style={links_container}>
              <Link style={{ color: "#C2DAFF", fontSize: 14 }} to={"/"}>
                Home
              </Link>
              <Link style={{ color: "#C2DAFF", fontSize: 14 }} to={"/"}>
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="Poppins-Bold">Features</h4>
            <div style={links_container}>
              <Link style={{ color: "#C2DAFF", fontSize: 14 }} to={"/hospital"}>
                For Hospital
              </Link>
              <Link
                style={{ color: "#C2DAFF", fontSize: 14 }}
                to={"/laboratory"}
              >
                For Laboratary
              </Link>
              <Link style={{ color: "#C2DAFF", fontSize: 14 }} to={"/pharmacy"}>
                For Pharmacy
              </Link>
              <Link style={{ color: "#C2DAFF", fontSize: 14 }} to={"/clinic"}>
                For Clinics
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div style={{ marginBlock: 40, color: "white" }}>
        <Divider style={{ background: "gray" }} />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="fs-14">
            © H-Cloud 2022 &nbsp;
            <Link style={{ color: "#C2DAFF" }} to={"/"}>
              Terms
            </Link>{" "}
            <Link style={{ color: "#C2DAFF" }} to={"/"}>
              Privacy
            </Link>
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Facebook style={{ cursor: "pointer" }} />
            <Twitter style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
