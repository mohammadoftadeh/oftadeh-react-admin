import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "../../oftadeh-layouts/layout/Layout";
import LayoutContext from "../../context/LayoutContext";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

function OftadehLayout(props) {
  const classes = useStyles(props);

  return (
    <LayoutContext.Provider value={{ content: props.children }}>
      <div className={classes.root}>
        <CssBaseline />
        <Layout />
      </div>
    </LayoutContext.Provider>
  );
}

OftadehLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any
};

export default OftadehLayout;
