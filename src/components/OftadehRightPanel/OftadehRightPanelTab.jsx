import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NavigationContext from "../../context/NavigationContext";
import NotificationsContainer from "../Notifications/Notifications-container";
import MessagesContainer from "../Messages/Messages-container";
import OftadehToday from "../OftadehToday/OftadehToday";
import { Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  TabWidth: {
    minWidth: 100,
    fontSize: 11,
    flex: 1
  },
  backButton: {
    width: "100%",
    borderRadius: 0
  }
}));

const OftadehRightPanelTab = () => {
  const classes = useStyles();

  const { value, handleChange, setOpenRightPanel } = React.useContext(
    NavigationContext
  );

  return (
    <div className={classes.root}>
      <div>
        <Button
          variant="contained"
          classes={{ root: classes.backButton }}
          onClick={() => setOpenRightPanel(false)}
        >
          Back <ArrowRightAltIcon />
        </Button>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab className={classes.TabWidth} label="Today" {...a11yProps(0)} />
            <Tab
              className={classes.TabWidth}
              label="Notifications"
              {...a11yProps(1)}
            />
            <Tab
              className={classes.TabWidth}
              label="Messages"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
      </div>
      <TabPanel value={value} index={0}>
        <OftadehToday />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NotificationsContainer />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MessagesContainer />
      </TabPanel>
    </div>
  );
};

export default OftadehRightPanelTab;
