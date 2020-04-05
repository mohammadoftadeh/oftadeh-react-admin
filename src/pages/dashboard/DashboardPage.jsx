import React from "react";
import OftadehLayout from "../../components/OftadehLayout/OftadehLayout";
import { Paper, Grid, makeStyles, Typography } from "@material-ui/core";
import OftadehBreadcrumbs from "../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import OftadehChart from "../../components/OftadehChart/OftadehChart";
import OftadehBarChart from "../../components/OftadehChart/OftadehBarChart";
import OftadehPieChart from "../../components/OftadehChart/OftadehPieChart";
import SimpleTable from "./components/SimpleTable";
import clsx from "clsx";

const useStyles = makeStyles((them) => ({
  paddingPaper: {
    padding: "10px 5px 5px 10px",
  },
  mt: {
    marginTop: 13,
  },
  titlePaper: {
    marginBottom: "16px",
  },
  visitorChart: {
    // height: "150px"
  },
}));

const DashboardPage = (props) => {
  const { history } = props;
  const classes = useStyles();

  return (
    <OftadehLayout>
      <h1>Dashboard</h1>
      <iframe
        title="star repo"
        src="https://ghbtns.com/github-btn.html?user=mohammadoftadeh&repo=oftadeh-react-admin&type=star"
        frameworker="0"
        scrolling="0"
        width="75px"
        height="30px"
        frameBorder="none"
        style={{ marginBottom: "20px" }}
      />
      <OftadehBreadcrumbs path={history} />
      <Grid container spacing={2}>
        <Grid className={classes.visitorChart} item xs={12}>
          <Paper className={classes.paddingPaper} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Visitors
            </Typography>
            <OftadehChart />
          </Paper>
        </Grid>
        <Grid item container xs={12} sm={8}>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paddingPaper, classes.mt)}
              variant="outlined"
            >
              <Typography className={classes.titlePaper} variant="h5">
                Foods
              </Typography>
              <SimpleTable />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paddingPaper, classes.mt)}
              variant="outlined"
            >
              <Typography className={classes.titlePaper} variant="h5">
                Sales
              </Typography>
              <OftadehBarChart />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paddingPaper} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Customers
            </Typography>
            <OftadehPieChart />
          </Paper>
        </Grid>
      </Grid>
    </OftadehLayout>
  );
};

export default DashboardPage;
