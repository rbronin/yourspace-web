import { makeStyles } from "@material-ui/core";
import { blue, blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.grey[300]}`,
    // boxShadow: theme.shadows[1],
    borderRadius: 10,
    padding: theme.spacing(1, 2),
    margin: theme.spacing(0, 0, 2),
    background: theme.palette.common.white,
  },
  avatar: {
    background: blue[50],
    color: theme.palette.primary.main,
    margin: theme.spacing(0, 1, 1, 0),
    fontWeight: "bold",
  },
  title: {
    fontWeight: 600,
    color: blueGrey[600],
    margin: theme.spacing(0),
    textTransform: "capitalize",
  },
  dateText: {
    fontWeight: 500,
    fontSize: 10,
    color: blueGrey[500],
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
    width: "100%",
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
  iconButton: {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.grey[100],
    },
    padding: theme.spacing(0, 1, 0, 0.5),
    borderRadius: 5,
    height: 35,
    color: theme.palette.grey[700],
  },
  buttonText: {
    color: theme.palette.grey[500],
    fontSize: 15,
    fontWeight: 600,
    marginLeft: 2,
  },
  commentBox: {
    padding: theme.spacing(0.5, 4),
    borderTop: `1px solid ${theme.palette.grey[200]}`,
  },
  comment: {
    display: "flex",
    margin: theme.spacing(0, 0, 1),
    width: "100%",
  },
  commentArea: {
    background: theme.palette.grey[100],
    padding: theme.spacing(1),
    borderRadius: 5,
    width: "100%",
  },
  closeComment: {
    height: 15,
    width: 70,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    cursor: "pointer",
    margin: theme.spacing(0.5, 0, 1),
  },
  icon: { color: theme.palette.grey[600] },
  user: {
    fontSize: 12,
    fontWeight: 600,
    margin: theme.spacing(0),
    color: theme.palette.grey[700],
  },
  userComment: {
    fontSize: 15,
    fontWeight: 500,
    margin: theme.spacing(0),
    color: theme.palette.grey[600],
  },
  commentAvatar: {
    background: blue[50],
    width: 30,
    height: 30,
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    margin: theme.spacing(0, 0.8, 0, 0),
    fontWeight: 700,
    fontSize: 17,
  },
  input: {
    borderRadius: 5,
    width: "100%",
    height: 40,
    border: `1px solid ${theme.palette.grey[300]}`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(1),
    color: theme.palette.grey[600],
    boxSizing: "border-box",
    fontWeight: 500,
    fontSize: 17,
    cursor: "pointer",
    outline: `1px solid ${theme.palette.grey[300]}`,
    margin: theme.spacing(0, 1, 0, 0),
  },
  liked: {
    background: theme.palette.primary.main,
  },
}));

export default useStyles;
