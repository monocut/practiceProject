import { Provider } from "react-redux";
import style from "./App.module.css";
import store, { MainFileContainer } from "./Redux/store";
import { SearchStoryContainer } from "./Redux/SearchStoryReducer";
import { UsersPageContainer } from "./Redux/UsersPageReducer";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={style.main}>
        <Provider store={store}>
          <Header />
          <Routes>
            {" "}
            <Route path="/home/" element={<MainFileContainer />} />
            <Route path="/users/" element={<UsersPageContainer />} />
            <Route path="/history/" element={<SearchStoryContainer />} />
          </Routes>
        </Provider>
      </div>
    </BrowserRouter>
  );
}
//mod

export default App;
