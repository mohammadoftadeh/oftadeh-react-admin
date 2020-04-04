import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
  makeStyles
} from "@material-ui/core";
import NavLinkAdapter from "../../NavLinkAdapter/NavLinkAdapter";
import OftadehNavBadge from "../OftadehNavBadge";

const useStyles = makeStyles(theme => ({
  active: {
    background: "#2467db",
    color: "#fff",
    "&:hover": {
      background: "#1a4fab"
    }
    // // borderRadius: "10px 0 0 10px"
  }
}));

const OftadehNavItem = props => {
  const classes = useStyles();
  const { item } = props;

  return (
    <ListItem
      button
      component={NavLinkAdapter}
      to={item.url}
      activeClassName={classes.active}
      exact={item.exact}
    >
      {item.icon && (
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText primary={item.title} />
      {item.badge && <OftadehNavBadge className="mr-4" badge={item.badge} />}
    </ListItem>
  );
};

export default OftadehNavItem;
