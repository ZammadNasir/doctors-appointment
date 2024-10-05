import { Box } from "@mui/material";
import { lazy } from "react";
import { Outlet } from "react-router";
import Loadable from "ui-components/Loadable";
import Header from "./Header";
import useHelper from "hooks/useHelper";
import { Login } from "routes/PageAsync";

const Footer = Loadable(lazy(() => import("./Footer")));
const SideBar = Loadable(lazy(() => import("./Sidebar")));

export default function MainLayout({ classes }: any) {
  const { pathname } = useHelper();
  return (
    <>
      {pathname === "/login" ? (
        <Login />
      ) : (
        <>
          <Box style={{ minHeight: "90vh" }}>
            <Header classes={classes} />
            <Outlet />
            <SideBar />
          </Box>
          <Footer classes={classes} />
        </>
      )}
    </>
  );
}
