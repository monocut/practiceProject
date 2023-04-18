import ShowSearchHistory from "../Components/ShowSearchHistory.js";
import { connect } from "react-redux";

const CLEAR_STORY_DATA = "CLEAR_STORY_DATA";
const REMOVE_STORY_ITEM = "REMOVE_STORY_ITEM";

export const clearStoryDataAction = () => ({
  type: CLEAR_STORY_DATA,
});

export const removeStoryItemAction = (index) => ({
  type: REMOVE_STORY_ITEM,
  item: index,
});

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
  };
};

export const SearchStoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowSearchHistory);
