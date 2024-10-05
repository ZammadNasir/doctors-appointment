import MainLayout from "layout/MainLayout";
import { Clinic, Home, Hospital, Laboratory, Login, Pharmacy } from "./PageAsync";
// ==============================|| MAIN ROUTING ||============================== //

// export default MainRoutes;

export function MainAppRoutes({ classes }: any) {
  const MainRoutes = {
    path: "/",
    element: <MainLayout classes={classes} />,
    children: [
      {
        path: "/",
        element: <Home classes={classes} />,
      },
      {
        path: "/login",
        element: <Login classes={classes} />,
      },
      {
        path: "/hospital",
        element: <Hospital classes={classes} />,
      },
      {
        path: "/clinic",
        element: <Clinic classes={classes} />,
      },
      {
        path: "/pharmacy",
        element: <Pharmacy classes={classes} />,
      },
      {
        path: "/laboratory",
        element: <Laboratory classes={classes} />,
      },
    ],
  };
  return MainRoutes;
}
