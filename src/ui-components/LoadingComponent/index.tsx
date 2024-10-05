import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

interface LoadingComponentProps {
  activity?: boolean;
}

const LoadingComponent: React.FC<LoadingComponentProps> = (props) => {
  const { activity = false } = props;
  return (
    <Dialog
      open={activity}
      maxWidth="sm"
      hideBackdrop
      PaperProps={{
        style: {
          background: "transparent",
          boxShadow: "none",
          overflow: "hidden",
        },
      }}
      style={{
        zIndex: 99999,
      }}
    >
      <DialogContent
        style={{
          overflow: "hidden",
          zIndex: 99999,
        }}
      >
        <section>
          <div className="ctn-preloader">
            <div>
              <img
                src={require("../../assets/images/loader/loader.gif")}
                alt="Loader..."
                width={100}
              />
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingComponent;
