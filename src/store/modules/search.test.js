import search, * as searchActions from "./search";

describe("search", () => {
  describe("actions", () => {
    it("should create actions", () => {
      const expectedActions = [
        { type: "search/CHANGE_INPUT", payload: "data" },
        { type: "search/INIT_SELECTED_DATA" }
      ];
      const actions = [
        searchActions.changeInput("data"),
        searchActions.initSelectedData()
      ];
      expect(actions).toEqual(expectedActions);
    });
  });
  describe("reducer", () => {
    let state = search(undefined, {});
    it("should return the initial State", () => {
      expect(state).toHaveProperty("input", "");
    });

    it("should change input", () => {
      state = search(state, searchActions.changeInput("바보"));
      expect(state).toHaveProperty("input", "바보");
    });
  });
});
