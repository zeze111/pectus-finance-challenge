import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  border: 1px solid #eeeeee;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  padding: 0px 10px 10px;
  font-weight: 700;
`;

/**
 * Component to display Navbar
 * @param {*} param0
 * @returns
 */
const Navbar = () => (
  <Wrapper>
    <p>Pectus Finance</p>
  </Wrapper>
);

export default Navbar;
