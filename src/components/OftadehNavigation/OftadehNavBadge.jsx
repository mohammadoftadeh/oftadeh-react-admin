import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0 7px",
    fontSize: 11,
    fontWeight: 600,
    height: 20,
    minWidth: 20,
    borderRadius: 20,
    display: "flex",
    alignItems: "center"
    // backgroundColor: theme.palette.secondary.main,
    // color: theme.palette.secondary.contrastText
  }
}));

const OftadehNavBadge = props => {
  const classes = useStyles(props);
  const { className, badge } = props;

  return (
    <div
      className={clsx(classes.root, className, "item-badge")}
      style={{
        backgroundColor: badge.bg,
        color: badge.fg
      }}
    >
      {badge.title}
    </div>
  );
};

OftadehNavBadge.propTypes = {
  badge: PropTypes.shape({
    title: PropTypes.node,
    bg: PropTypes.string,
    fg: PropTypes.string
  })
};

OftadehNavBadge.defaultProps = {};

export default OftadehNavBadge;
