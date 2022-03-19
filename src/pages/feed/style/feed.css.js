import { makeStyles } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 14),
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(0, 5),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 5),
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(0, 2),
      padding: theme.spacing(1, 0),
    },
  },
  rightSide: {
    // border: `1px solid ${theme.palette.grey[300]}`,
  },
  leftSide: {
    // border: `1px solid ${theme.palette.grey[300]}`,
  },
  middleSide: {
    padding: theme.spacing(0, 2),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(0, 1.5),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 1),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
    },
  },
  name: {
    fontSize: 23,
    fontWeight: 600,
    margin: 0,
    marginTop: 5,
    color: blueGrey[600],
    textTransform: "capitalize",
  },
  uname: {
    fontSize: 17,
    fontWeight: 500,
    margin: 0,
    color: blueGrey[400],
    textTransform: "lowercase",
  },
}));

export default useStyles;
