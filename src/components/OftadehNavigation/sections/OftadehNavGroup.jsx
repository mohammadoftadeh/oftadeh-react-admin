import React from "react";

import OftadehNavCollapse from "./OftadehNavCollapse";
import OftadehNavItem from "./OftadehNavItem";
import OftadehNavLink from "./OftadehNavLink";
import { ListSubheader } from "@material-ui/core";

const OftadehNavGroup = props => {
  const { item } = props;

  return (
    <>
      <ListSubheader>{item.title}</ListSubheader>

      {item.children && (
        <React.Fragment>
          {item.children.map(item => (
            <React.Fragment key={item.id}>
              {item.type === "group" && <NavGroup item={item} />}

              {item.type === "collapse" && <OftadehNavCollapse item={item} />}

              {item.type === "item" && <OftadehNavItem item={item} />}

              {item.type === "link" && <OftadehNavLink item={item} />}
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    </>
  );
};

const NavGroup = React.memo(OftadehNavGroup);

export default NavGroup;
