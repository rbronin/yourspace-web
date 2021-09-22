import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "#fefefe",
    color: theme.palette.primary.main,
  },
  root: {
    margin: theme.spacing(0, 10),
  },
  logo: {
    color: theme.palette.primary.main,
    fontSize: 36,
    margin: 0,
  },
}));

export default useStyles;
