import AdminLayout from "layout/AdminLayout";
import { Appointments, CreateHealthRecord, Dashboard, HealthRecord } from "./PageAsync";
// ==============================|| MAIN ROUTING ||============================== //

// export default AuthenticationRoutes;

export function AuthenticationRoutes({ classes }: any) {
  const MainRoutes = {
    path: "/",
    element: <AdminLayout classes={classes} />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard classes={classes} />,
      },
      {
        path: "/admin/appointments",
        element: <Appointments classes={classes} />,
      },
      {
        path: "/admin/health-records",
        element: <HealthRecord classes={classes} />,
      },
      {
        path: "/admin/create/health-record/:id?",
        element: <CreateHealthRecord classes={classes} />,
      },
    ],
  };
  return MainRoutes;
}

