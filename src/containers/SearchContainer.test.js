import React from "react";
import { mount } from "enzyme";
import SearchContainer from "./SearchContainer";
import configureMockStore from "redux-mock-store";
import * as searchActions from "../store/modules/search";

describe("SearchContainer", () => {
  let component = null;
  let buttons = null;
  const mockStore = configureMockStore();

  let store = mockStore({
    search: {
      input: "",
      pending: false,
      error: false,
      data: null,
      selectedData: null
    }
  });

  it("renders properly", () => {
    const context = { store };
    component = mount(<SearchContainer />, { context });
  });

  it("matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
