import { combineReducers } from "redux";
import search from "./search";

export default combineReducers({
  search
});

// 여러가지 리듀서를 루트 리듀서 하나로 합치는 역할을 한다.
