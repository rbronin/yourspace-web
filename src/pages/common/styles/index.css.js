import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(10, 0, 0),
    minHeight: "70vh",
  },
  imgContainer: {
    padding: theme.spacing(2, 1),
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  mainHeading: {
    // maxWidth: 500,
    fontWeight: "bold",
    fontSize: theme.typography.h3.fontSize,
    margin: 0,
  },
  startedBtn: {
    margin: theme.spacing(3, 0),
  },
  logo: {
    margin: 4,
    fontWeight: "bolder",
    fontSize: 32,
  },
}));
