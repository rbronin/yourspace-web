// import { logout as ACTIONS } from "../index";
import { deleteToken } from "../../../Config";
import { clearUser } from "../users/user";
import { clearLogin, clearSignup } from "../auth/auth";
import { clearAuthentication } from "../auth/index";
import { clearFeed } from "../posts/feed";
import { clearPost } from "../posts/get-post";
import { clearRecommendation } from "../users/recommend";
import { clearCollections } from "../users/collections";
import { clearFriends } from "../users/friends";

export const Logout = () => {
  return (dispatch) => {
    // dispatch(LogoutStart());
    deleteToken();
    dispatch(clearAuthentication());
    dispatch(clearUser());
    dispatch(clearLogin());
    dispatch(clearSignup());
    dispatch(clearFeed());
    dispatch(clearPost());
    dispatch(clearRecommendation());
    dispatch(clearCollections());
    dispatch(clearFriends());
    // dispatch(LogoutSuccess());
  };
};

// const LogoutStart = () => {
//   return {
//     type: ACTIONS.LOGOUT_START,
//   };
// };
// const LogoutSuccess = (data) => {
//   return {
//     type: ACTIONS.LOGOUT_SUCCESS,
//     data: data,
//   };
// };
