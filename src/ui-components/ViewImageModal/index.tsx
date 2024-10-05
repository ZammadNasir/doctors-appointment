/*
  Created By Muhammad Hassaan
  Date 17 April 2023
*/
import { Close } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function ViewImageModal(props: any) {
  const { activity, children, handleCloseModal, width } = props;
  return (
    <Dialog
      open={activity}
      maxWidth="sm"
      PaperProps={{
        style: {
          overflow: "hidden",
          width: width,
          height: "max-content",
        },
      }}
      onClose={handleCloseModal}
    >
      <DialogTitle
        style={{
          padding: "10px 20px 0px 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          position: "absolute",
          right: 6,
          top: 6
        }}
      >
        <Close style={{ cursor: "pointer" }} onClick={handleCloseModal} />
      </DialogTitle>
      <DialogContent
        style={{
          overflow: "hidden",
          paddingBlock: 0,
          padding: 0,
        }}
      >
    
        {children}
      </DialogContent>
    </Dialog>
  );
}
