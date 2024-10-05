// project imports
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logos/logo.svg";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ width, height }: any) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
          navigate("/");
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        cursor: "pointer"
      }}
    >
      <img
        src={logo}
        alt="Logo"
        width={width}
        height={height}
      />
    </div>
  );
};

export default LogoSection;
