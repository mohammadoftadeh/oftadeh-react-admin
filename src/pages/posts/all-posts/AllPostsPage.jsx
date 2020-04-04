import React from "react";
import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles(theme => ({
  my3: {
    margin: "1.3rem 0"
  },
  mb0: {
    marginBottom: 0
  },
  mRight: {
    marginRight: ".85rem"
  },
  p1: {
    padding: ".85rem"
  }
}));

const columns = [
  {
    name: "title",
    label: "Title",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "author",
    label: "Author",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "categories",
    label: "Categories",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "tags",
    label: "Tags",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "date",
    label: "Date",
    options: {
      filter: true,
      sort: true
    }
  }
];

const data = [
  {
    title: "Learn Javascript",
    author: "Mohammad Oftadeh",
    categories: "javascript",
    tags: "web, javascript",
    date: "12-12-2020"
  },
  {
    title: "React.js with Material UI",
    author: "John Doe",
    categories: "react, material-ui",
    tags: "react, material ui",
    date: "12-12-2020"
  }
];

const options = {
  filterType: "checkbox"
};

const AllPostsPage = props => {
  const { history } = props;
  const classes = useStyles();

  return (
    <OftadehLayout>
      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            Posts
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push("/pages/posts/add-post")}
            variant="outlined"
            color="primary"
            size="small"
          >
            Add Post
          </Button>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={"Posts List"}
        data={data}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default AllPostsPage;
