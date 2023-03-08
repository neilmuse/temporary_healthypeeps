import { createTheme } from "@mui/material/styles";
import "../index.css";
import COLORS from "../constants/colors.js";

const RECIPE_THEME = createTheme({
  typography: {
    hero: {
      fontSize: "5rem",
      fontFamily: "Quicksand",
      fontWeight: 600,
      color: COLORS.GREEN,
    },
    title: {
      fontSize: "2.5rem",
      fontFamily: "Quicksand",
      fontWeight: 600,
      color: COLORS.GREEN,
    },
    subtitle: {},
    body1: {
      fontSize: "1.1rem",
      fontFamily: "Roboto",
    },
  },
  fontFamily: ["Roboto", "Karla", "Quicksand"].join(","),
});

export default RECIPE_THEME;

