import React, { useReducer } from "react";
import loginBanner from "assets/images/doctors/login-banner-img.webp";
import logo from "assets/images/logos/logo.svg";
import InputField from "ui-components/TextFeild";
import { Checkbox } from "@mui/material";
import Button from "ui-components/Button";
import { saveStringToLocalStorage } from "utils/localStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      email: "",
      password: "",
      remember_me: false,
    }
  );

  const handle_login = () => {
    const data = {
      email: state.email,
      password: state.password,
    }

    if(!state.email) {
      return toast.error("Please enter email.")
    } else if(!state.password) {
      return toast.error("Please enter password.")
    }
    saveStringToLocalStorage("token", "true")
    navigate("/admin/dashboard")

  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "50%",
          position: "relative",
          backgroundImage: `url(${loginBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "11vh",
          backgroundPosition: "center",
          backgroundColor: "#12428f",
        }}
      >
        <div style={{ paddingLeft: 40, paddingBottom: 40, lineHeight: 1.2 }}>
          <h1
            style={{ textAlign: "center", fontSize: 40, color: "#fff" }}
            className="Poppins-Bold"
          >
            More Efficiency, <br />
            Better Care
          </h1>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <img src={logo} alt="Logo" />
        <div style={{marginBlock: 40}}>
        <p className="Poppins-Regular" style={{ color: "#121314" }}>
          Login to your account
        </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem",  width: "400px" }}>
          <InputField
            value={state.email}
            onChange={(e) => setState({ email: e.target.value })}
            placeholder="Email"
            fullWidth
          />
          <InputField
            value={state.password}
            onChange={(e) => setState({ password: e.target.value })}
            placeholder="Password"
            fullWidth
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Checkbox
                checked={state.remember_me}
                onChange={() => setState({ remember_me: !state.remember_me })}
                style={{paddingLeft: 0}}
              />
              <span style={{ color: "#4E5055", fontSize: 14 }}>
                Remember me
              </span>
            </div>
            <p className="blue-primary fs-14 underline Poppins-SemiBold pointer">
              Forgot Password?
            </p>
          </div>
        </div>

        <div style={{width: 400, marginBlock: 40}}>
          <Button 
          value={"Login"}
          fullWidth
          onClick={handle_login}
          />
          <div style={{marginTop: 20, textAlign: "center"}}>
          <p className="fs-14" style={{fontWeight: 600, color: "#212529"}}>Don't have a H-Cloud account? <span className="blue-primary underline"> Request Demo </span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
