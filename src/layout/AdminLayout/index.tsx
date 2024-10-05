import { Box } from "@mui/material";
import { lazy } from "react";
import { Outlet } from "react-router";
import Loadable from "ui-components/Loadable";
import Header from "./Header";

const Footer = Loadable(lazy(() => import("./Footer")));
const SideBar = Loadable(lazy(() => import("./Sidebar")));

export default function AdminLayout({ classes }: any) {
  return (
    <>
      <Box style={{ minHeight: "91vh" }}>
        <Header classes={classes} />
        <Outlet />
        <SideBar />
      </Box>
      <Footer classes={classes} />
    </>
  );
}
