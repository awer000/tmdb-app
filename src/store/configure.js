import { createStore, applyMiddleware } from "redux";
import modules from "./modules";
import ReduxThunk from "redux-thunk";

const configure = () => {
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(modules, devTools, applyMiddleware(ReduxThunk));

  return store;
};

export default configure;
