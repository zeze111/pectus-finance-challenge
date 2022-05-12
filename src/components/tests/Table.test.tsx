import React from "react";
import { shallow } from "enzyme";
import Table, { Wrapper } from "../Table";

const mockProps = {
  data: [
    ["department", "project_name", "amount", "date", "member_name"],
    ["sales", "abc-123", "$200", "05/14/2022", "Tester"],
    ["sales", "abc-234", "$500", "06/14/2022", "Tester2"],
    ["IT", "abc-123", "$200", "07/14/2022", "Tester3"],
    ["legal", "abc-123", "$200", "05/14/2022", "Tester"],
    ["legal", "abc-234", "$500", "06/14/2022", "Tester2"],
  ],
};

describe("Table Component", () => {
  const wrapper = shallow(<Table {...mockProps} />);
  test("it renders the component", () => {
    expect(wrapper.find(Wrapper).exists).toBeTruthy();
  });
});
