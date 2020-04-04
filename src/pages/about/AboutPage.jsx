import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

import OftadehLayout from "../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";

const AboutPage = props => {
  const editor = useRef(null);
  const [bodyPost, setBodyPost] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."
  );

  const { history } = props;

  return (
    <OftadehLayout>
      <h1>About</h1>
      <OftadehBreadcrumbs path={history} />
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
    </OftadehLayout>
  );
};

export default AboutPage;
