import { lazy } from "react";
import Loadable from "ui-components/Loadable";

export const Home = Loadable(lazy(() => import("views/Web/Home")));
export const Hospital = Loadable(lazy(() => import("views/Web/Hospital")));
export const Clinic = Loadable(lazy(() => import("views/Web/Clinic")));
export const Laboratory = Loadable(lazy(() => import("views/Web/Laboratory")));
export const Pharmacy = Loadable(lazy(() => import("views/Web/Pharmacy")));
export const Login = Loadable(lazy(() => import("views/Web/Login")));


export const Dashboard = Loadable(lazy(() => import("views/Admin/Dashboard")));
export const Appointments = Loadable(lazy(() => import("views/Admin/Appointments")));
export const HealthRecord = Loadable(lazy(() => import("views/Admin/HealthRecord")));
export const CreateHealthRecord = Loadable(lazy(() => import("views/Admin/CreateHealthRecord")));
