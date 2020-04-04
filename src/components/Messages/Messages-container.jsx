import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import OftadehListItems from "../OftadehListItems/OftadehListItems";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const MsgList = [
  {
    id: 1,
    title: "Remy Sharp",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    subTitle: "Ali Connors — I'll be in your neighborhood..."
  },
  {
    id: 2,
    title: "Mohammad Oftadeh",
    avatar:
      "https://lh5.googleusercontent.com/-WqhFe4eMggE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFUa5CK9Wi6g5qd8ZUt6apKFYSwA/photo.jpg?sz=328",
    subTitle: "Hi I'm Mohammad Oftadeh"
  },
  {
    id: 3,
    title: "Jennifer.ms",
    avatar: "https://material-ui.com/static/images/avatar/3.jpg",
    subTitle: "Do you have Paris recommendations?"
  }
];

const MessagesContainer = props => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <OftadehListItems type="ListItemAvatar" data={MsgList} />
    </List>
  );
};

export default MessagesContainer;
