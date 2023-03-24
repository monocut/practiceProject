import { Provider } from "react-redux";
import style from "./App.module.css";
import store, { MainFileContainer } from "./Redux/store";
import { SearchStoryContainer } from "./Redux/SearchStoryReducer";
import { UsersPageContainer } from "./Redux/UsersPageReducer";

function App() {
  return (
    <div className={style.main}>
      <Provider store={store}>
        <MainFileContainer />
        <div className={style.box}>
          <UsersPageContainer />
          <SearchStoryContainer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
