import "./App.css";

import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

// routing
import AppRoute from "routes";
import NavigationScroll from "layout/NavigationScroll";

// defaultTheme
import themes from "themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// project imports

function App() {
  const customization = useSelector((state: any) => state.customization);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
      <ToastContainer
          position={"top-right"}
          autoClose={2000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          style={
           {zIndex:99999999}
          }
        />
        <NavigationScroll>
          <CssBaseline />
          <AppRoute />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
