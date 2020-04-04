import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#0d131d",
    color: "#fff",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  statusCode: {
    background: "#fff",
    padding: ".3rem",
    borderRadius: 13,
    color: "#0d131d"
  },
  button: {
    marginTop: ".85rem"
  }
}));

const Error500Page = props => {
  const classes = useStyles();
  const { history } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Oops! <span className={classes.statusCode}>500</span>
      </Typography>
      <Typography variant="body1">
        The page you are looking for is temporarily unavailable.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => history.push("/")}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default Error500Page;
