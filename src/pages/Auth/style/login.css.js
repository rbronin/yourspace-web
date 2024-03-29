import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  form: {
    background: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: 10,
    padding: theme.spacing(3, 4),
    width: 450,
    boxShadow: theme.shadows[1],
    [theme.breakpoints.down("lg")]: {
      width: 400,
      padding: theme.spacing(3, 3),
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      padding: theme.spacing(3, 2),
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      padding: theme.spacing(3, 1),
      boxShadow: theme.shadows[0],
    },
  },
  buttonDiv: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    textTransform: "none",
    fontSize: 17,
    color: theme.palette.primary.main,
  },
  grid: {
    height: "100vh",
  },
  divider: {
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.grey[500],
  },
  link: {
    fontSize: 15,
    fontWeight: 600,
    color: theme.palette.grey[900],
    margin: 0,
  },
}));

export default useStyles;
