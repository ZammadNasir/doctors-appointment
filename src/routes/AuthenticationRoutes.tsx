import AdminLayout from "layout/AdminLayout";
import { Appointments, AppointmentDetails, Dashboard, PateintDetails, DoctorsDetails } from "./PageAsync";
import Doctors from "views/Admin/Doctors";
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
        path: "/admin/appointments/details/:id?",
        element: <AppointmentDetails classes={classes} />,
      },
      {
        path: "/admin/pateint/details/:id?",
        element: <PateintDetails classes={classes} />,
      },
      {
        path: "/admin/doctors",
        element: <Doctors classes={classes} />,
      },
      {
        path: "/admin/doctor/details/:id?",
        element: <DoctorsDetails classes={classes} />,
      },
    ],
  };
  return MainRoutes;
}

