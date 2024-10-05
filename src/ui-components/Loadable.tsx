import { Suspense } from "react";

// project imports
import LoadingComponent from "./LoadingComponent";

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<LoadingComponent />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
