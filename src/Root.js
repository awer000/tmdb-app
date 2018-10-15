import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

// redux를 적용하기 위해 Provider에 store를 넣어준다.

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
