import "./App.css";
import Posts from "./components/Posts";
import Users from "./components/Users";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          Reduxjs BookStoressss
          <Posts />
          <Users />
        </header>
      </div>
    </Provider>
  );
}

export default App;
