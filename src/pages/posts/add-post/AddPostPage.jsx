import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

// import { EditorState, convertToRow } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, makeStyles, TextField } from "@material-ui/core";
import AddPostRightPanels from "../../../components/extra/AddPostRightPanels/AddPostRightPanels";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  my3: {
    margin: "1.3rem 0"
  },
  mb3: {
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
  // demoEditor: {
  //   border: "1px solid #eee",
  //   padding: "5px",
  //   borderRadius: "2px",
  //   height: "350px"
  // }
}));

const AddPostPage = props => {
  const editor = useRef(null);
  const [bodyPost, setBodyPost] = useState("");

  const { history } = props;
  const classes = useStyles();

  return (
    <OftadehLayout>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Add New Post
      </Typography>
      <OftadehBreadcrumbs path={history} />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid container item xs={12} md={8}>
            <Grid item xs={12}>
              <TextField
                id="standard-full-width"
                label="Add New Post"
                className={classes.mb3}
                placeholder="Enter title here"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <Editor
            editorState={bodyPost}
            wrapperClassName="demo-wrapper"
            editorClassName={classes.demoEditor}
            onEditorStateChange={value => setBodyPost(value)}
          /> */}
              <JoditEditor
                ref={editor}
                value={bodyPost}
                config={{
                  readonly: false,
                  style: {
                    height: "350px"
                  }
                }}
                tabIndex={1}
                onBlur={value => setBodyPost(value)}
                onChange={value => {}}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <AddPostRightPanels />
          </Grid>
        </Grid>
      </div>
    </OftadehLayout>
  );
};

export default AddPostPage;
