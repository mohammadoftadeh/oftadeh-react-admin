import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";

const OftadehListItemAvatar = ({ item }) => {
  return (
    <>
      <ListItemAvatar>
        <Avatar alt={item.title} src={item.avatar} />
      </ListItemAvatar>
      <ListItemText primary={item.title} secondary={item.subTitle} />
    </>
  );
};

export default OftadehListItemAvatar;
