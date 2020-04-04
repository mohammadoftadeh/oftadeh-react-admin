/* eslint-disable no-use-before-define */

import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function AddPostRightPanelsAutoComplete() {
  return (
    <Autocomplete
      multiple
      size="small"
      //   id="checkboxes-tags-demo"
      options={data}
      disableCloseOnSelect
      getOptionLabel={option => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: "100%" }}
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          label="Choose"
          placeholder="Choose"
        />
      )}
    />
  );
}

const data = [
  { title: "web" },
  { title: "javascript" },
  { title: "react" },
  { title: "material ui" }
];
