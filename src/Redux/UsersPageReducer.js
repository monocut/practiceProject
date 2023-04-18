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
const setNewUserNameAction = (id, newUserName) => {
  return {
    type: SET_NEW_USER_NAME,
    id: id,
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
    setNewUserName: (id, newUserName) =>
      dispatch(setNewUserNameAction(id, newUserName)),
  };
};

export const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
