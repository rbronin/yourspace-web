import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.grey[300]}`,
    // boxShadow: theme.shadows[1],
    borderRadius: 10,
    padding: theme.spacing(1, 2),
    margin: theme.spacing(0, 0, 2),
  },
  avatar: {
    backgroundColor: "#fefefe",
    color: theme.palette.primary.main,
    margin: theme.spacing(0, 1, 1, 0),
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.common.black,
    margin: theme.spacing(0),
  },
  dateText: {
    fontWeight: "normal",
    fontSize: 15,
    color: theme.palette.grey[600],
    margin: theme.spacing(0, 0, 1),
  },
  content: {
    fontWeight: "medium",
    color: theme.palette.grey[600],
    margin: theme.spacing(1, 1),
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgContainer: {
    maxHeight: 400,
    maxWidth: "fit-parent",
  },
  img: {
    maxHeight: 400,
    maxWidth: "fit-parent",
  },
  actions: {
    borderTop: `1px solid ${theme.palette.grey[200]}`,
  },
}));

export default useStyles;
