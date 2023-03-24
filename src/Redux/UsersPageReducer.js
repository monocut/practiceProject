import UsersPage from "../Components/UsersPage";
import { connect } from "react-redux";

const REMOVE_USER_ITEM = "REMOVE_USER_ITEM";
const SET_NEW_USER_NAME = "SET_NEW_USER_NAME";

const removeUserItemAction = (userId) => {
  return {
    type: REMOVE_USER_ITEM,
    userId: userId,
  };
};
const setNewUserNameAction = (newUserName) => {
  return {
    type: SET_NEW_USER_NAME,
    newUserName: newUserName,
  };
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeUserItem: (userId) => dispatch(removeUserItemAction(userId)),
    setNewUserName: (newUserName) =>
      dispatch(setNewUserNameAction(newUserName)),
  };
};

export const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
