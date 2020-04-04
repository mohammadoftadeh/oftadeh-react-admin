import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DateRangeIcon from "@material-ui/icons/DateRange";
import OfflinePinIcon from "@material-ui/icons/OfflinePin";
import {
  Grid,
  Button,
  Divider,
  ExpansionPanelActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import AddPostRightPanelsAutoComplete from "./AddPostRightPanelsAutoComplete";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  mb3: {
    marginBottom: "1.3rem"
  },
  mb1: {
    marginBottom: ".85rem"
  },
  my1: {
    margin: ".85rem 0"
  }
}));

export default function AddPostRightPanels() {
  const [expanded, setExpanded] = React.useState(true);

  const classes = useStyles();

  const handleExpandedChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded} className={classes.mb3}>
        <ExpansionPanelSummary
          onClick={handleExpandedChange}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Publish</Typography>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>
          <Grid container>
            <Grid
              item
              container
              justify="space-between"
              className={classes.my1}
            >
              <Button variant="contained" color="default" size="small">
                Save Draft
              </Button>
              <Button variant="contained" color="default" size="small">
                Preview
              </Button>
            </Grid>
            <Grid item>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <OfflinePinIcon />
                  </ListItemIcon>
                  <ListItemText primary="status" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <VisibilityIcon />
                  </ListItemIcon>
                  <ListItemText primary="visibility" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Publish" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Grid container justify="space-between">
            <Button color="secondary" size="small">
              Move To Trash
            </Button>
            <Button variant="contained" color="primary" size="small">
              Publish
            </Button>
          </Grid>
        </ExpansionPanelActions>
      </ExpansionPanel>
      <ExpansionPanel className={classes.mb3}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Categories</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <AddPostRightPanelsAutoComplete />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.mb3}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Tags</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <AddPostRightPanelsAutoComplete />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
