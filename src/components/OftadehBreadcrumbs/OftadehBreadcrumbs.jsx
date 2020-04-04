import React from "react";
import { Breadcrumbs, Link, Typography, makeStyles } from "@material-ui/core";
import NavLinkAdapter from "../../components/NavLinkAdapter/NavLinkAdapter";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 20
  }
}));

const OftadehBreadcrumbs = props => {
  const { path } = props;
  const classes = useStyles();

  const pathName = path.location.pathname.split("/");
  const lastRoute = pathName.splice(-1, 1);

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        {pathName.length > 1 &&
          pathName.map((item, index) => (
            <Link
              key={index}
              component={NavLinkAdapter}
              to={pathName.join("/")}
              activeClassName="active"
              exact={true}
              color="inherit"
            >
              {item === "" ? "dashboard" : item}
            </Link>
          ))}
        <Typography color="textPrimary">{lastRoute.toString()}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default OftadehBreadcrumbs;
