import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.grey[100],
    boxSizing: "border-box",
    padding: theme.spacing(0, 15),
    minHeight: "100vh",
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    cursor: "pointer",
  },
  about: {
    width: "100%",
    textAlign: "center",
  },
  imgWrapper: {
    width: "100%",
    margin: theme.spacing(10, 0, 0),
  },
  img: {
    maxWidth: "400px",
  },
  techWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  techTitle: {
    margin: theme.spacing(1, 0),
    fontWeight: "bold",
  },
  techSection: {
    margin: theme.spacing(0),
  },
  techItem: {
    fontWeight: "bold",
    fontSize: 17,
    color: theme.palette.primary.main,
    listStyle: "none",
  },
  content: {
    margin: theme.spacing(6, 0, 0),
    padding: theme.spacing(2, 2, 0),
  },
}));
