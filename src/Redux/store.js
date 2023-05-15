import { connect } from "react-redux";
import { createStore } from "redux";
import MainFile from "../Components/MainFile";

const SET_USER_DATA = "SET_USER_DATA";
const CLEAR_USER_DATA = "CLEAR_USER_DATA";
const CLEAR_STORY_DATA = "CLEAR_STORY_DATA";
const REMOVE_STORY_ITEM = "REMOVE_STORY_ITEM";
const REMOVE_USER_ITEM = "REMOVE_USER_ITEM";
const SET_NEW_USER_NAME = "SET_NEW_USER_NAME";
const SET_LIKES = "SET_LIKES";
const SET_UNLIKES = "SET_UNLIKES";

export const initialState = {
  userData: null,
  searchHistory: [],
  users: [
    { id: 1, name: "Vova", likes: 0 },
    { id: 2, name: "Sasha", likes: 0 },
    { id: 3, name: "Anastasia", likes: 0 },
    { id: 4, name: "Daria", likes: 0 },
    { id: 5, name: "Artur", likes: 0 },
    { id: 6, name: "Artem", likes: 0 },
    { id: 7, name: "Dmytro", likes: 0 },
  ],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        userData: action.userData,
        searchHistory: [
          ...state.searchHistory,
          { ...action.userData, date: new Date().toLocaleString() },
        ],
      };
    }

    case CLEAR_USER_DATA: {
      return {
        ...state,
        userData: initialState.userData,
      };
    }
    case CLEAR_STORY_DATA: {
      return {
        ...state,
        searchHistory: initialState.searchHistory,
      };
    }
    case REMOVE_STORY_ITEM: {
      const newStoryData = state.searchHistory.filter(
        (el) => el.date !== action.item
      );
      return {
        ...state,
        searchHistory: newStoryData,
      };
    }
    case REMOVE_USER_ITEM: {
      const newUsersData = state.users.filter((el) => el.id !== action.userId);
      return {
        ...state,
        users: newUsersData,
      };
    }
    case SET_NEW_USER_NAME: {
      const newUsers = state.users.map((user) => {
        if (user.id === action.id) {
          return { ...user, name: action.newUserName };
        }
        return user;
      });
      return {
        ...state,
        users: newUsers,
      };
    }
    case SET_LIKES: {
      const likesCount = state.users.map((el) => {
        if (el.id === action.id) {
          return { ...el, likes: el.likes + 1 };
        }
        return el;
      });
      return {
        ...state,
        users: likesCount,
      };
    }
    case SET_UNLIKES: {
      const likesCount = state.users.map((el) => {
        if (el.id === action.id) {
          return { ...el, likes: el.likes - 1 };
        }
        return el;
      });
      return {
        ...state,
        users: likesCount,
      };
    }

    default: {
      return state;
    }
  }
};

export const createSetUserDataAction = (user) => ({
  type: SET_USER_DATA,
  userData: user,
});

export const clearUserDataAction = () => ({
  type: CLEAR_USER_DATA,
});

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.error(e);
  }
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const persistedState = loadStateFromLocalStorage();

const mapStateToProps = (state) => {
  return {
    user: state.userData,
    searchHistory: state.searchHistory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (user) => dispatch(createSetUserDataAction(user)),
    clearUserData: () => dispatch(clearUserDataAction()),
  };
};

export const MainFileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainFile);

const store = createStore(
  userReducer,
  persistedState
  // applyMiddleware(localStorageMiddleWare)
);

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});
export default store;
