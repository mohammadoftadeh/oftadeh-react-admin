import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Icon, ListItemIcon } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";

const OftadehListItemIcon = ({ item }) => (
  <>
    <ListItemAvatar>
      <ListItemIcon>
        <Avatar>
          <Icon color={item.color}>{item.icon}</Icon>
        </Avatar>
      </ListItemIcon>
    </ListItemAvatar>
    <ListItemText primary={item.title} secondary={item.subTitle} />
  </>
);

export default OftadehListItemIcon;
