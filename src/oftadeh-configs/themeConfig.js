import { createMuiTheme } from "@material-ui/core";
import { blueGrey, grey } from "@material-ui/core/colors";

const getTheme = theme => {
  return createMuiTheme({
    palette: {
      type: theme.paletteType
      //   background: {
      //     default: theme.paletteType === "light" ? "#000" : "#fff"
      //   }
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: theme.paletteType === "dark" && blueGrey.A900,
          color: theme.paletteType !== "dark" && grey
          //   background: theme.paletteType === "dark" && "#18202c"
        }
      },
      MuiDrawer: {
        paper: {
          background: theme.paletteType === "dark" ? blueGrey.A900 : "#0d131d",
          // this is where magic happens
          "& *": {
            color: theme.paletteType === "dark" && "rgba(255, 255, 255, 0.7)"
          }
        }
      }
    }
  });
};

export default getTheme;
