import styled from "styled-components";

export const List = styled.div`
width: 100%;
`;

export const Item = styled.div`
width: 100%;
button {
  width: 100%;
  font-family: "Visitor";
  text-align: left;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  font-size: 14px;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
`;