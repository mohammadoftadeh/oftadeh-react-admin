import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import OftadehListItemIcon from "./sections/OftadehListItemIcon";
import OftadehListItemAvatar from "./sections/OftadehListItemAvatar";

const OftadehListItems = props => {
  const { data, type, divider, button } = props;

  return (
    <>
      {data.map(item => (
        <ListItem divider={divider} button={button} key={item.id}>
          <React.Fragment>
            {type === "ListItemIcon" && <OftadehListItemIcon item={item} />}

            {type === "ListItemAvatar" && <OftadehListItemAvatar item={item} />}

            {type === "ListItemText" && (
              <ListItemText
                primary={item.title}
                secondary={item.subTitle ? item.subTitle : ""}
              />
            )}
          </React.Fragment>
        </ListItem>
      ))}
    </>
  );
};

export default OftadehListItems;
