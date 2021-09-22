import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 1),
  },
  avatar: {
    backgroundColor: "#fefefe",
    color: theme.palette.primary.main,
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.common.black,
  },
  dateText: {
    fontWeight: "normal",
    color: theme.palette.grey[600],
  },
  content: {
    fontWeight: "medium",
    color: theme.palette.grey[600],
  },
  row: {
    display: "flex",
  },
}));

export default useStyles;
