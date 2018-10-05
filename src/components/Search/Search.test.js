import React from "react";
import renderer from "react-test-renderer";
import Search from "./Search";

describe("Search", () => {
  let component = null;

  it("renders correctly", () => {
    component = renderer.create(<Search />);
  });

  it("matches snapshot", () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
