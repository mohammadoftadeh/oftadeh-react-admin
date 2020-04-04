import React from "react";
import { makeStyles, Typography, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0d131d",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  mBottom: {
    marginBottom: ".5rem",
  },
  button: {
    marginTop: ".85rem",
  },
  loginCard: {
    width: "275px",
    borderRadius: 5,
    background: "#fff",
    padding: ".85rem",
  },
}));

const ForgotPasswordPage = (props) => {
  const classes = useStyles();
  const { history } = props;

  return (
    <div className={classes.root}>
      <div className={classes.loginCard}>
        <Typography variant="h5" component="h1">
          Forgot Password
        </Typography>
        <Typography className={classes.mBottom} variant="body1">
          Enter your email
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            size="small"
            label="Email"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <div className={classes.mBottom}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={() => history.push("/")}
            >
              send
            </Button>
          </div>
        </form>
        <Typography variant="caption">&copy; Oftadeh | React Admin</Typography>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
