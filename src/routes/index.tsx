import { useRoutes } from "react-router-dom";
import { MainAppRoutes } from "./MainAppRoutes";
import useStyles from "./style-jss";
import { getDataFromLocalStorage, getStringFromLocalStorage } from "utils/localStore";
import { AuthenticationRoutes } from "./AuthenticationRoutes";

// routes
// import MainRoutes from "./MainAppRoutes";

export function AppRoute() {
  const classes = useStyles() as any;

  let element = MainAppRoutes({ classes });
  let element_2 = AuthenticationRoutes({ classes });
  let token = getStringFromLocalStorage("token");

  // eslint-disable-next-line
  if (!token) return useRoutes([element]);

  // eslint-disable-next-line
  return useRoutes([element_2]);
}
export default AppRoute;
