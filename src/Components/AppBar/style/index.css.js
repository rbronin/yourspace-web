import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: blue[50],
    color: theme.palette.primary.main,
    border: "none",
    cursor: "pointer",
  },
  root: {
    margin: theme.spacing(0, 4),
  },
  logo: {
    color: theme.palette.primary.main,
    fontSize: 36,
    margin: 0,
  },
}));

export default useStyles;
