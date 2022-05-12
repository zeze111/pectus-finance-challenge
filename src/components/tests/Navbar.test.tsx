import React from "react";
import { shallow } from "enzyme";
import Navbar, { Wrapper } from "../Navbar";

test("It renders the component", () => {
  const wrapper = shallow(<Navbar />);

  expect(wrapper.find(Wrapper).exists).toBeTruthy();
});
