import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
};

function AlertModal(props) {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={() => props.setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Disclaimer
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
              style={{ textAlign: "center" }}
            >
              This is research based project, we dont cliam any responsibility
              for any data that we collect and any test we perform.
            </Typography>
            <Button
              style={{ marginTop: "10px" }}
              color="primary"
              variant="contained"
              onClick={() => props.setOpen(false)}
            >
              I, Accept
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default AlertModal;
