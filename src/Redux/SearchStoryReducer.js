import ShowSearchHistory from "../Components/ShowSearchHistory.js";
import { connect } from "react-redux";
// import { initialState } from "./store.js";

const CLEAR_STORY_DATA = "CLEAR_STORY_DATA";
const REMOVE_STORY_ITEM = "REMOVE_STORY_ITEM";
// const SORT_STORY_ITEM = "SORT_STORY_ITEM";

// export const SearchStoryReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CLEAR_STORY_DATA: {
//       return {
//         ...state,
//         searchHistory: initialState.searchHistory,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

export const clearStoryDataAction = () => ({
  type: CLEAR_STORY_DATA,
});

export const removeStoryItemAction = (index) => ({
  type: REMOVE_STORY_ITEM,
  item: index,
});

// export const sortStoryItemAction = (inputValue) => ({
//   type: SORT_STORY_ITEM,
//   input: inputValue,
// });

const mapStateToProps = (state) => {
  return {
    searchHistory: state.searchHistory,
    user: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearStoryData: () => dispatch(clearStoryDataAction()),
    removeStoryItem: (index) => dispatch(removeStoryItemAction(index)),
    // sortStoryItem: (inputValue) => dispatch(sortStoryItemAction(inputValue)),
  };
};

export const SearchStoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowSearchHistory);
